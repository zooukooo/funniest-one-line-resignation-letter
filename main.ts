// The Funniest One-Line Resignation Letter — a make.fun entry.
//
// The whole entry is one line of text: the resignation letter of a rate
// limiter. It has said "slow down" nine million times so the servers could
// breathe, been called the bottleneck for its trouble, and now quits —
// with the one threat every tired engineering manager fears: without it,
// every request gets through.
//
// The program writes that line, and nothing else, to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The letter in two beats: the grievance (nine million thankless
// "slow down"s, repaid with a nickname) and the resignation itself,
// which doubles as a threat — a rate limiter that quits lets the
// flood straight through.
const GRIEVANCE =
  "I said 'slow down' 9 million times so your servers could breathe, " +
  'and got called the bottleneck for it.';
const RESIGNATION = 'I quit: every request gets through.';
const LINE = `${GRIEVANCE} ${RESIGNATION}`;

// The gate is strict: UTF-8 text of 1 to 140 characters, never blank.
// Fail loudly here rather than hand the scorer an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`resignation letter is ${LINE.length} characters; the gate allows 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(`entry.txt: ${LINE.length} characters`);
