// ai-joke-03 entry: one joke about AI coding agents, written to /output/entry.txt.
// Node 22, standard library only, no network. Deterministic: the same bytes every run.
// The joke is written with no trailing newline: the gate counts every character,
// and the judge reads exactly the bytes in the file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "My agent called its commit 'minor cleanup.' The diff touches 47 files. Git blame now says my name.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
