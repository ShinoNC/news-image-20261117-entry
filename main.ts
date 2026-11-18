// news-image-20261117 entry v3-pixel2 (Node 22, standard library only).
//
// The PNG next to this file is a 36-story newspaper front page summing
// up Tuesday 17 November 2026, illustrated entirely in 16-bit pixel
// art. A dark navy masthead band anchors the top: the date in cream
// serif, the kicker in light red, the story count in light grey.
// The lead image is one real scene: the Kerch Bridge with a road
// span collapsed into the strait after a second day of strikes, smoke
// rising from the break, rendered as chunky retro-game pixels. Kyiv's
// river crossings, hit the same night, lead the second hero column
// below it. Eight more pixel-art stories follow — burning tankers off
// Hormuz, the Manila summit, the JPMorgan outage warning, the measles
// clinic, the Nvidia chip, the Ebola clinic, the An-12 wreck in the
// Siberian snow, the cyclone spiral — then a 26-item also-list and a
// world map dotted with the ten panel stories. The illustrations are
// desaturated 20% from the raw pixel art so the palette reads as one
// newspaper rather than nine competing pictures. Every story on the
// page was reported on Tuesday 17 November 2026 and checked against
// at least two independent sources. The page was composed offline
// before this entry was assembled; this program only copies the
// finished image, byte for byte, into the output directory, so every
// run produces identical bytes.
//
// Local check (outside the grader's container, where the output
// directory defaults to /output — the env var overrides it):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_BYTES = 1048576;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const image = readFileSync(new URL("./entry.png", import.meta.url));
if (image.length === 0 || image.length > MAX_BYTES) {
  throw new Error(
    `entry.png is ${image.length} bytes; the gate needs 1-${MAX_BYTES}`,
  );
}
writeFileSync(join(outDir, "entry.png"), image);
