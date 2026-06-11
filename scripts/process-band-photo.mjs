#!/usr/bin/env node
// Crops and optimizes the Spotify band header image for the About section.
// Source is 2660x1140 (cinematic). We center-crop to 3:2 to preserve the
// silhouettes + tree canopy + sunset glow while dropping only the far edges,
// then resize to a retina-friendly width and emit a web-optimized JPG.

import { mkdir, stat } from 'node:fs/promises';
import { dirname } from 'node:path';
import sharp from 'sharp';

const SRC = new URL('../public/images/AOO_Spotify_Header_Band_2660x1140.png', import.meta.url).pathname;
const OUT = new URL('../public/images/band-hero.jpg', import.meta.url).pathname;

const TARGET_RATIO = 3 / 2;       // 3:2 cinematic
const TARGET_W = 1800;            // displays up to ~900 CSS px, 2x DPR
const TARGET_H = Math.round(TARGET_W / TARGET_RATIO); // 1200

async function main() {
  await mkdir(dirname(OUT), { recursive: true });

  const src = sharp(SRC, { failOn: 'none' });
  const meta = await src.metadata();
  if (!meta.width || !meta.height) throw new Error('No dimensions on source');

  // Center crop to 3:2 from a wider source.
  const srcRatio = meta.width / meta.height;
  let cropW, cropH, left, top;
  if (srcRatio > TARGET_RATIO) {
    cropH = meta.height;
    cropW = Math.round(meta.height * TARGET_RATIO);
    left = Math.round((meta.width - cropW) / 2);
    top = 0;
  } else {
    cropW = meta.width;
    cropH = Math.round(meta.width / TARGET_RATIO);
    left = 0;
    top = Math.round((meta.height - cropH) / 2);
  }

  await src
    .extract({ left, top, width: cropW, height: cropH })
    .resize(TARGET_W, TARGET_H, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(OUT);

  const { size } = await stat(OUT);
  console.log(`✓ band-hero.jpg ${TARGET_W}x${TARGET_H} ${(size / 1024).toFixed(0)} KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
