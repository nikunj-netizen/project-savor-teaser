#!/usr/bin/env node
import { execSync } from "child_process";
import { resolve, dirname, extname, join } from "path";
import { fileURLToPath } from "url";
import { existsSync, readFileSync, statSync } from "fs";
import http from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const outDir = resolve(projectRoot, "out");
const OUTPUT = resolve(outDir, "deck.pdf");
const PORT = 4173;
const BASE = "/project-savor-teaser";
const URL = `http://localhost:${PORT}${BASE}`;
const W = 1280;
const H = 720;

const MIME = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".woff": "font/woff", ".ico": "image/x-icon", ".txt": "text/plain" };

function serve(req, res) {
  let url = req.url.split("?")[0];
  if (url.startsWith(BASE)) url = url.slice(BASE.length) || "/";
  let filePath = join(outDir, url);
  try { if (statSync(filePath).isDirectory()) filePath = join(filePath, "index.html"); } catch {}
  if (!existsSync(filePath)) { res.writeHead(404); res.end("Not found"); return; }
  const ext = extname(filePath);
  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
  res.end(readFileSync(filePath));
}

async function main() {
  if (!existsSync(outDir)) { console.error("out/ not found"); process.exit(1); }
  let chromium;
  try { const pw = await import("playwright"); chromium = pw.chromium; }
  catch { execSync("npx playwright install chromium", { stdio: "inherit", cwd: projectRoot }); const pw = await import("playwright"); chromium = pw.chromium; }

  console.log("Starting server...");
  const server = http.createServer(serve);
  await new Promise((r) => server.listen(PORT, () => { console.log(`Server on port ${PORT}`); r(undefined); }));

  console.log(`Generating PDF from ${URL}...`);
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: W, height: H });
    await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(3000);
    const count = await page.locator(".slide-wrapper").count();
    console.log(`Found ${count} slides.`);
    if (count === 0) { console.error("No slides found. Page may not have hydrated."); await browser.close(); server.close(); process.exit(1); }
    for (let i = 0; i < count; i++) {
      await page.locator(".slide-wrapper").nth(i).scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
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
