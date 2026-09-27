const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const htmlPath = path.join(rootDir, "resume-template.html");
const pdfPath = path.join(rootDir, "public", "Ibrahim-Aliy-Resume.pdf");

const possibleBrowsers = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];

const browser = possibleBrowsers.find((p) => fs.existsSync(p));

if (!browser) {
  console.error("No compatible browser (Chrome or Edge) found for PDF generation.");
  process.exit(1);
}

console.log(`Generating PDF using: ${browser}`);
console.log(`Input HTML: ${htmlPath}`);
console.log(`Output PDF: ${pdfPath}`);

try {
  const cmd = `"${browser}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${htmlPath}"`;
  execSync(cmd, { stdio: "inherit" });
  console.log("Successfully generated public/Ibrahim-Aliy-Resume.pdf");
} catch (err) {
  console.error("Failed to generate PDF:", err);
  process.exit(1);
}
