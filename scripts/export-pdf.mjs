#!/usr/bin/env node

/**
 * PDF Export Script — Project Savor Teaser
 *
 * Usage:
 *   npm run export:pdf                          # starts its own server
 *   USE_EXISTING_SERVER=1 npm run export:pdf     # uses dev server on :3335
 *
 * Requires: npx playwright install chromium (first time only)
 */

import { execSync, spawn } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const USE_EXISTING = process.env.USE_EXISTING_SERVER === "1";
const PORT = USE_EXISTING ? (process.env.PORT || 3335) : 3336;
const URL = `http://localhost:${PORT}`;
const pdfLabel = "Project-Savor-Teaser";
const OUTPUT = resolve(projectRoot, "output", `${new Date().toISOString().slice(0, 10).replace(/-/g, "")}_${pdfLabel}.pdf`);

// PowerPoint standard 16:9 = 13.333" × 7.5"
// At 96 CSS-px per inch: 1280 × 720 CSS px
const W = 1280;
const H = 720;

async function main() {
  execSync(`mkdir -p ${resolve(projectRoot, "output")}`);

  // Import playwright
  let chromium;
  try {
    const pw = await import("playwright");
    chromium = pw.chromium;
  } catch {
    console.log("Installing playwright...");
    execSync("npx playwright install chromium", { stdio: "inherit", cwd: projectRoot });
    const pw = await import("playwright");
    chromium = pw.chromium;
  }

  // Optionally start a Next.js server
  let server;
  if (!USE_EXISTING) {
    console.log("Starting Next.js server...");
    server = spawn("npx", ["next", "dev", "--port", String(PORT)], {
      cwd: projectRoot,
      stdio: "pipe",
    });
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Server start timeout")), 60000);
      const check = (data) => {
        const s = data.toString();
        if (s.includes("Ready") || s.includes("ready") || s.includes(`localhost:${PORT}`) || s.includes("started")) {
          clearTimeout(timeout);
          resolve();
        }
      };
      server.stdout.on("data", check);
      server.stderr.on("data", check);
    });
    console.log("Server ready.");
  }

  console.log(`Generating PDF from ${URL}...`);

  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: W, height: H });
    await page.goto(URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    // Scroll every slide into view so Framer Motion animations trigger
    const slideCount = await page.locator("section.slide").count();
    console.log(`Found ${slideCount} slides. Triggering animations...`);
    for (let i = 0; i < slideCount; i++) {
      await page.locator("section.slide").nth(i).scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
    }
    await page.locator("section.slide").first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Flatten the scroll container and force all content visible
    await page.evaluate((dims) => {
      const { W, H } = dims;
      const c = document.querySelector(".deck-container");
      if (c) { c.style.cssText = "height:auto;overflow:visible;scroll-snap-type:none;"; }

      document.querySelectorAll(".deck-nav,.deck-progress").forEach(el => el.style.display = "none");

      document.querySelectorAll("[style]").forEach(el => {
        if (el.style.opacity !== "" && parseFloat(el.style.opacity) === 0) el.style.opacity = "1";
        if (el.style.transform && el.style.transform !== "none") {
          const t = el.style.transform;
          const hasRotate = /rotate\(/.test(t);
          const hasDecorativeFlip = /scale[XY]?\(\s*-1\s*\)/.test(t);
          const hasSkew = /skew/.test(t);
          const hasCenterTranslate = /translate\(\s*-50%\s*,\s*-50%\s*\)/.test(t);

          if (hasRotate || hasDecorativeFlip || hasSkew || hasCenterTranslate) {
            const preserved = [];
            const rotates = t.match(/rotate\([^)]+\)/g);
            if (rotates) preserved.push(...rotates);
            const flips = t.match(/scale[XY]?\(\s*-1[^)]*\)/g);
            if (flips) preserved.push(...flips);
            const skews = t.match(/skew[XY]?\([^)]+\)/g);
            if (skews) preserved.push(...skews);
            const centers = t.match(/translate\(\s*-50%\s*,\s*-50%\s*\)/g);
            if (centers) preserved.push(...centers);
            el.style.transform = preserved.length ? preserved.join(" ") : "none";
          } else {
            el.style.transform = "none";
          }
        }
      });

      document.querySelectorAll(".slide").forEach((el, i, arr) => {
        el.style.cssText += `;width:${W}px;height:${H}px;max-height:${H}px;min-height:${H}px;overflow:hidden;box-sizing:border-box;margin:0;page-break-inside:avoid;page-break-after:${i < arr.length - 1 ? "always" : "auto"};`;
      });

      const s = document.createElement("style");
      s.textContent = `
        html,body { width:${W}px;height:auto!important;overflow:visible!important;margin:0;padding:0 }
        .slide::before { background-size: 64px 64px !important; }
      `;
      document.head.appendChild(s);
    }, { W, H });

    await page.waitForTimeout(500);

    await page.pdf({
      path: OUTPUT,
      width: "13.333in",
      height: "7.5in",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    console.log(`PDF generated: ${OUTPUT}`);
    await browser.close();

    // Compress images with PyMuPDF
    const { statSync, renameSync, unlinkSync } = await import("fs");
    const origSize = statSync(OUTPUT).size;
    const COMPRESSED = OUTPUT.replace(".pdf", "-compressed.pdf");
    console.log("Compressing images with PyMuPDF...");
    execSync(`python3 << 'PYEOF'
import fitz

pdf = fitz.open("${OUTPUT}")
seen = set()
count = 0

for page in pdf:
    for img in page.get_images(full=True):
        xref = img[0]
        if xref in seen:
            continue
        seen.add(xref)

        smask = img[1]
        if smask != 0:
            continue

        stream = pdf.xref_stream(xref)
        if stream is None or len(stream) < 102400:
            continue

        try:
            pix = fitz.Pixmap(pdf, xref)
            if pix.alpha:
                continue
            if pix.n not in (1, 3):
                pix = fitz.Pixmap(fitz.csRGB, pix)
            jpeg = pix.tobytes("jpeg", jpg_quality=82)
            page.replace_image(xref, stream=jpeg)
            count += 1
        except Exception:
            pass

pdf.save("${COMPRESSED}", garbage=4, deflate=True, use_objstms=True, compression_effort=100)
pdf.close()
print(f"Compressed {count} images")
PYEOF`, { stdio: "inherit" });

    const compSize = statSync(COMPRESSED).size;
    unlinkSync(OUTPUT);
    renameSync(COMPRESSED, OUTPUT);
    console.log(`\n✓ PDF exported: ${OUTPUT}`);
    console.log(`  ${(origSize / 1024 / 1024).toFixed(1)}MB → ${(compSize / 1024 / 1024).toFixed(1)}MB\n`);
  } finally {
    if (server) server.kill();
  }
}

main().catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});
