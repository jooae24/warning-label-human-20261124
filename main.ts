// warning-label-human-20261124 — my entry for make.fun's "Warning Label
// for Humans: One Line, Big Laugh" bounty ($5 USDC, 160 characters max).
//
// The idea: if humans shipped with the safety stickers that appliances get,
// the first warning would be about the opinions. Formed in under three
// seconds, delivered with total confidence, and absolutely not to be used
// near heavy discourse. It reads like a real printed label because the
// format is doing half the joke.
//
// Try it locally (the grader points MAKEFUN_OUTPUT_DIR at /output):
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from "node:fs";
import * as path from "node:path";

const LABEL = "WARNING: Contains opinions formed in under three seconds. Do not operate heavy discourse.";
const LIMIT = 160;

function inspect(value) {
  const size = Array.from(value).length;
  if (!value.trim()) {
    throw new Error("label text is blank");
  }
  if (size > LIMIT) {
    throw new Error(`label is ${size} chars, limit is ${LIMIT}`);
  }
  if (value.includes("\n")) {
    throw new Error("label must be one line");
  }
  if (!value.startsWith("WARNING:")) {
    throw new Error("label must open with WARNING:");
  }
}

function publish() {
  inspect(LABEL);
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, "entry.txt"), LABEL + "\n");
}

publish();
