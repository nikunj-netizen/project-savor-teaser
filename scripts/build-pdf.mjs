#!/usr/bin/env node
import { execSync } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";
import http from "http";
import handler from "serve-handler";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const outDir = resolve(projectRoot, "out");
const OUTPUT = resolve(outDir, "deck.pdf");
const PORT = 4173;
const URL = `http://localhost:${PORT}/project-savor-teaser`;
const W = 1280;
const H = 720;

async function main() {
  if (!existsSync(outDir)) { console.error("out/ not found"); process.exit(1); }
  let chromium;
  try { const pw = await import("playwright"); chromium = pw.chromium; }
  catch { execSync("npx playwright install chromium", { stdio: "inherit", cwd: projectRoot }); const pw = await import("playwright"); chromium = pw.chromium; }

  console.log("Starting server...");
  const server = http.createServer((req, res) => handler(req, res, { public: outDir }));
  await new Promise((res) => server.listen(PORT, () => { console.log(`Server on port ${PORT}`); res(undefined); }));

  console.log(`Generating PDF from ${URL}...`);
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: W, height: H });
    await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(2000);
    const count = await page.locator(".slide-wrapper").count();
    console.log(`Found ${count} slides.`);
    for (let i = 0; i < count; i++) {
      await page.locator(".slide-wrapper").nth(i).scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
    }
    await page.locator(".slide-wrapper").first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.evaluate((dims) => {
      const { W, H } = dims;
      const c = document.querySelector(".deck-container");
      if (c) c.style.cssText = "height:auto!important;overflow:visible!important;scroll-snap-type:none!important;display:block!important;";
      document.querySelectorAll(".deck-nav,.deck-progress").forEach(el => el.style.display = "none");
      document.querySelectorAll(".slide-wrapper").forEach((wrapper, i, arr) => {
        wrapper.style.cssText = `width:${W}px!important;height:${H}px!important;display:block!important;overflow:hidden!important;page-break-after:${i < arr.length - 1 ? "always" : "auto"};`;
        const inner = wrapper.firstElementChild;
        if (inner) inner.style.cssText = `width:${W}px!important;height:${H}px!important;transform:none!important;`;
      });
      document.querySelectorAll("[style]").forEach(el => {
        if (el.style.opacity !== "" && parseFloat(el.style.opacity) === 0) el.style.opacity = "1";
        if (el.style.transform && el.style.transform !== "none") {
          const t = el.style.transform;
          if (/translate\(\s*-50%\s*,\s*-50%\s*\)/.test(t) || /scale[XY]?\(\s*-1\s*\)/.test(t)) return;
          if (!el.closest(".slide-wrapper")) el.style.transform = "none";
        }
      });
      document.querySelectorAll(".slide").forEach(el => { el.style.width = `${W}px`; el.style.height = `${H}px`; el.style.maxHeight = `${H}px`; el.style.overflow = "hidden"; });
      const s = document.createElement("style");
      s.textContent = `html,body{width:${W}px!important;height:auto!important;overflow:visible!important;margin:0!important;padding:0!important}.slide::before{background-size:64px 64px!important}`;
      document.head.appendChild(s);
    }, { W, H });
    await page.waitForTimeout(500);
    await page.pdf({ path: OUTPUT, width: "13.333in", height: "7.5in", printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
    console.log(`PDF saved: ${OUTPUT}`);
    await browser.close();
  } finally { server.close(); }
}
main().catch(e => { console.error(e); process.exit(1); });
