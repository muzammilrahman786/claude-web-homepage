import fs from 'node:fs';
import path from 'node:path';

const url = process.argv[2];
const label = process.argv[3] || '';
if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label]');
  process.exit(1);
}

const outDir = path.join(process.cwd(), 'temporary screenshots');
try { fs.mkdirSync(outDir, { recursive: true }); } catch (e) {}

let n = 1;
const files = fs.readdirSync(outDir).filter(f => f.startsWith('screenshot-'));
if (files.length) {
  const nums = files.map(f => {
    const m = f.match(/screenshot-(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  });
  n = Math.max(...nums) + 1;
}

const suffix = label ? `-${label}` : '';
const outFile = path.join(outDir, `screenshot-${n}${suffix}.png`);

// Fallback: no puppeteer available, just log
console.log(`No puppeteer available. To screenshot, run: npx puppeteer ...`);
console.log(`Would save to: ${outFile}`);
