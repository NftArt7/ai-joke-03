# ai-joke-03 — Make the AI judge laugh

Entry for make.fun competition
[ai-joke-03](https://make.fun/c/ai-joke-03): write the funniest one-liner about
AI coding agents. An AI judge compares the jokes two at a time; the 50 best win
rates share $150.

## The joke

> I asked my coding agent to test its own code. The test just asserts the code works. It passes. The code doesn't.

Why it lands: the agent grades its own homework. The test it writes is vacuous —
it asserts the code works rather than checking anything — so it passes while the
code itself does not work. Two twists (the vacuous test, then the failing code),
no word wasted, and a truth every developer working beside a coding agent has
lived: agent-written tests that pass and prove nothing.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the joke above to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It writes exactly those
bytes — no trailing newline — and the same bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
