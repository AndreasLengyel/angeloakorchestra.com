#!/usr/bin/env node
// Comic-book unification pass for member photos.
// Reads public/images/members/raw/<key>.png|jpg|jpeg
// Writes public/images/members/<key>.jpg at 1200x1600, warmly toned for cohesion.

import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('../public/images/members/', import.meta.url).pathname;
const RAW_DIR = join(ROOT, 'raw');
const OUT_DIR = ROOT;

// Per-member vertical bias for the smart crop (0 = top, 1 = bottom).
// Tweak after you eyeball the first pass.
const CROP_BIAS = {
  'andreas-petersson': 0.30,
  'fideli-jonsson':    0.35,
  'magnus-petersson':  0.28,
  'andreas-lengyel':   0.30,
  'vlado-markovic':    0.20,
  'robin-averling':    0.28,
};

const TARGET_W = 1200;
const TARGET_H = 1600;

async function processOne(rawPath, key) {
  const bias = CROP_BIAS[key] ?? 0.3;

  const src = sharp(rawPath, { failOn: 'none' }).rotate(); // honour EXIF orientation
  const meta = await src.metadata();
  if (!meta.width || !meta.height) throw new Error(`No dimensions for ${key}`);

  // Compute a 3:4 crop window biased toward the top (where faces live).
  const targetRatio = TARGET_W / TARGET_H; // 0.75
  const srcRatio = meta.width / meta.height;

  let cropW, cropH, left, top;
  if (srcRatio > targetRatio) {
    // Source is too wide → crop sides
    cropH = meta.height;
    cropW = Math.round(meta.height * targetRatio);
    left = Math.round((meta.width - cropW) / 2);
    top = 0;
  } else {
    // Source is too tall → crop top/bottom (biased upward)
    cropW = meta.width;
    cropH = Math.round(meta.width / targetRatio);
    left = 0;
    top = Math.min(
      Math.max(0, Math.round((meta.height - cropH) * bias)),
      meta.height - cropH
    );
  }

  const outPath = join(OUT_DIR, `${key}.jpg`);

  await src
    .extract({ left, top, width: cropW, height: cropH })
    .resize(TARGET_W, TARGET_H, { fit: 'cover', position: 'centre' })
    // Boost mid-tones & contrast for poster punch
    .normalise()
    .linear(1.08, -8)
    // Desaturate, then re-tint warm — unifies every photo to one palette
    .modulate({ saturation: 0.55, brightness: 1.02 })
    .tint({ r: 234, g: 198, b: 145 })  // warm amber cast
    // Crisper edges → reads more illustrated
    .sharpen({ sigma: 1.2, m1: 1.2, m2: 0.6 })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(outPath);

  const { size } = await stat(outPath);
  console.log(`  ✓ ${key.padEnd(22)} ${(size / 1024).toFixed(0)} KB`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const entries = await readdir(RAW_DIR);

  console.log(`\nProcessing ${entries.length} photos → ${OUT_DIR}\n`);

  for (const entry of entries.sort()) {
    const { name, ext } = parse(entry);
    if (!/\.(png|jpe?g|webp)$/i.test(ext)) continue;
    try {
      await processOne(join(RAW_DIR, entry), name);
    } catch (err) {
      console.error(`  ✗ ${name}: ${err.message}`);
    }
  }

  console.log('\nDone.\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
