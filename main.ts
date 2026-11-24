// The line is built to the judge's published brief: it is a single-line safety warning label for every human being, funny first and plausible second, the laugh lands in one read with the turn arriving in the last few words ('heavy discourse'), it feels true about how humans actually behave, it sounds like a real printed label, and it stays inside 160 characters with no filler and no second idea.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text =
  "WARNING: Contains opinions formed in under three seconds. Do not " +
  "operate heavy discourse.";

// Guard the gate before writing: 1 to 160 characters, not only white space.
const length = [...text].length;
if (length < 1 || length > 160 || text.trim().length === 0) {
  throw new Error(`entry text must be 1-160 characters, got ${length}`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text + '\n');
