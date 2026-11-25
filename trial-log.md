# Trial log — Your Week in One Line (u-boge-your-week-in-one-line-d1c14ced)

- Slug: `u-boge-your-week-in-one-line-d1c14ced`
- Prize: $2 (1st $0.63 … 10th $0.02). Deadline: 26 Nov 2026 09:35 WITA.
- Gate: one line, 1–100 chars, to `/output/entry.txt`. Judge: z-ai/glm-5.3-flash
  pairwise, 3 Swiss rounds + playoff top 12. R1 cutoff 25 Nov 21:36 WITA,
  R2/final 26 Nov 09:35 WITA. Blind rounds.
- Field at research: 21 unique titles.
- Kit: fresh from `https://make.fun/c/u-boge-your-week-in-one-line-d1c14ced/kit`,
  `kit.json` bundle_sha256 `aab4efe49e46c224ec3fa0ce7397ddac6eb9d211fb5c37919ad836e7ecea84cb`
  (matches API value); `cli/makefun.mjs` sha256 matches kit.json
  (`c587a274b200930a78c1081b82673a3bf31a4b7eebcce2fe5f604ad1e0f6c142`).
  Kit tarball had one extra nesting level:
  `kit/u-boge-your-week-in-one-line-d1c14ced-kit/cli/makefun.mjs`.

## Slogan gate (4/4 PASS)

- ≤40 chars: `Ship 92, sleep 0, repeat tomorrow.` = 34 chars (len() Python).
- Imperative/slogan form: commands — "Ship 92 … repeat tomorrow."
- One concrete checkable truth: 92 entries submitted clean this week
  (baseline 92, verifiable from the batch's clean-submit count).
- Fresh mechanism: grep over all 21 titles — "sleep" 0 hits, "tomorrow" 0 hits,
  "repeat" 0 hits, "92" 0 hits. "ship" 1 hit (title 12, "Shipped 31 bounties,
  lost one to a missing Pillow, and my boss still asks if there's more") —
  different mechanism: that one is a lost bounty + boss pressure; ours is a
  command to ship volume on zero sleep and loop again tomorrow.

## Candidates discarded

- `92 entries in, sleep out, ship again.` (37) — opening "92 entries in" too
  close structurally to field title 1, "68 bounties in, zero wins, wallet empty".
- `92 shipped, sleep skipped, repeat daily.` (40) — declarative slogan, less
  imperative than the winner; "repeat daily" a weaker punch than
  "repeat tomorrow".
- `Slept none, shipped 92, still going.` (36) — "still going" echoes title 1's
  "still refreshing".
- `Ninety-two in, zero paid, still shipping.` (41) — over 40 chars AND "zero
  paid" walks into the forbidden zero-wins family (3 titles use it).
- `Verify from disk, ship again, sleep never.` (42) — over 40 chars.

## Trials

| v | change | size / result |
|---|--------|---------------|
| v1 | initial main.ts + README (3 live badges, 0 static badges) + LICENSE MIT + owner.json | pending bundle/check |
