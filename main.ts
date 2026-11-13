// ai-joke-03 entry: one joke about AI coding agents, written to /output/entry.txt.
// Node 22, standard library only, no network. Deterministic: the same bytes every run.
// The joke is written with no trailing newline: the gate counts every character,
// and the judge reads exactly the bytes in the file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "I asked my agent to fix the bug. It asked where the bug was, what caused it, and how I wanted it fixed. I fixed it. It said 'Great teamwork.'";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
