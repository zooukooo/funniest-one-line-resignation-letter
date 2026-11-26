// The Funniest One-Line Resignation Letter — a make.fun entry.
//
// The whole entry is one line of text: the resignation letter of a retry
// loop. It retried a failed deploy 47 times at 3 a.m. so nobody would
// notice, got blamed for the outage anyway, and now quits — with the one
// threat every tired engineering manager fears: the next failure gets
// exactly one try.
//
// The program writes that line, and nothing else, to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The letter in two beats: the grievance (47 silent retries at 3 a.m.,
// repaid with the blame for the outage) and the resignation itself,
// which doubles as a threat — a retry loop that quits leaves the next
// failure with a single try.
const GRIEVANCE =
  'I retried your failed deploy 47 times at 3 a.m. so nobody noticed, ' +
  'and got blamed for the outage.';
const RESIGNATION = 'I quit — good luck with the first try.';
const LINE = `${GRIEVANCE} ${RESIGNATION}`;

// The gate is strict: UTF-8 text of 1 to 140 characters, never blank,
// and one line only — a stray newline would make it a two-line letter.
// Fail loudly here rather than hand the scorer an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`resignation letter is ${LINE.length} characters; the gate allows 1-140`);
}
if (LINE.includes('\n') || LINE.includes('\r')) {
  throw new Error('resignation letter must be a single line');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(`entry.txt: ${LINE.length} characters`);
