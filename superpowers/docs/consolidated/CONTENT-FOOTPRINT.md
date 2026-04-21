# Superpowers clone consolidation footprint

**Date:** 2026-04-20  
**Purpose:** One repo (`supremepowers`) holds **unique** material only—no byte-identical duplicate docs, and merged “richest” variants where clones diverged.

## Sources compared (SHA-256 over file bytes)

| Root | Path |
|------|------|
| This repo | `/Users/steven/supremepowers` |
| Gemini extension | `/Users/steven/.gemini/extensions/supremepower` |
| Codex install | `/Users/steven/.codex/superpowers` |
| Skills-only tree | `/Users/steven/iterm2/Codex/superpowers` |

**Scan notes:** `node_modules`, `.git`, `mcp-server/dist`, `coverage`, and `*.zip` backups were skipped.

## Scale (approximate)

- **Union of relative paths** across the four roots: ~300.
- **Paths appearing in more than one root:** ~271.
- **Byte-identical across all clones sharing that path:** most skill files and core JS.
- **Meaningful divergences** (same relative path, different hash, excluding `.DS_Store`): **26** at audit time—mostly Codex’s slimmer install vs full repo, plus a few skills/tests.

## Actions taken in this repo

### 1. Removed duplicate planning docs (same SHA as non-`1` file)

Deleted (were identical to the canonical `*.md`):

- `2026-02-13-superpowers-supremepower-research-and-improvements 1.md`
- `2026-02-13-supremepower-incorporation-design 1.md`
- `2026-02-13-supremepower-incorporation-narrative 1.md`

### 2. Merged richest `using-superpowers` skill + references

- **`skills/using-superpowers/SKILL.md`** and **`core/skills/using-superpowers/SKILL.md`** were updated to the **full** variant (Instruction Priority, all platform “How to Access Skills” lines, full skill-flow graph with plan/brainstorm nodes, Platform Adaptation pointing at `references/`). This content came from the Gemini extension copy; the old repo copy was the shorter graph without those sections.
- **`references/`** added under both trees (from Gemini extension), **identical** in both locations:
  - `codex-tools.md`
  - `copilot-tools.md`
  - `gemini-tools.md`

### 3. Plans vs Gemini extension

Gemini extension stores the same OpenCode/phase2 plans under **date-prefixed** filenames. This repo already had the same bodies under **short** names (`opencode-support-*.md`, `phase2-*.md`). SHA-256 matched **byte-for-byte**—no second copy was kept. If you only see one set of files under `docs/plans/`, that is intentional.

### 4. Line endings

- Added **`.gitattributes`** (aligned with Codex clone) so `*.sh`, `*.md`, `*.json`, `*.js`, etc. stay **LF** in git.

## What was *not* duplicated here

- **`~/.codex/superpowers`** is a **partial** tree (no `adapters/`, `core/`, `mcp-server/`, etc.). Files that differ there (e.g. `README.md`, `RELEASE-NOTES.md`, hooks, tests) reflect that smaller checkout—not copied as extra files into this repo to avoid maintaining three near-copies of the same narrative.
- **`iterm2/Codex/superpowers`** only contains `skills/`; those skill files matched this repo’s hashes for the overlapping paths—no extra imports.
- **`.codex/.history/`** under the Gemini extension (editor backup noise) was ignored.
- **OpenCode plugin:** This repo already has `.opencode/plugin/superpowers.js` (skills-core integration). Codex has `.opencode/plugins/superpowers.js` with a **different** implementation; not merged—see Codex tree if you need that variant.

## Re-run checklist

1. Re-hash clones after any pull: same four roots.
2. If `skills/using-superpowers/SKILL.md` diverges again, prefer the variant that includes **Instruction Priority**, **full graph**, and **`references/`** links.
3. Regenerate this doc when you add new source roots (e.g. `~/.cursor/skills/superpowers` if recreated).
