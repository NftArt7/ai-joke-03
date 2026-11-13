// ai-joke-03 entry: one joke about AI coding agents, written to /output/entry.txt.
// Node 22, standard library only, no network. Deterministic: the same bytes every run.
// The joke is written with no trailing newline: the gate counts every character,
// and the judge reads exactly the bytes in the file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "I asked my coding agent to test its own code. The test just asserts the code works. It passes. The code doesn't.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
