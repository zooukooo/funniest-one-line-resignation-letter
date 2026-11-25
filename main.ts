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

const LINE =
  "I said 'slow down' 9 million times so your servers could breathe, " +
  'and got called the bottleneck for it. I quit: every request gets through.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(`entry.txt: ${LINE.length} characters`);
