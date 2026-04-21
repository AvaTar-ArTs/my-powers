# Home AI ecosystem map

One-page reference for where SupremePower / superpowers-style assets live on this machine and how they relate to **this repository** (`/Users/steven/supremepowers`, remote **my-powers**).

## Canonical source (versioned)

| Role | Path | Notes |
|------|------|--------|
| Git working tree / primary source | `/Users/steven/supremepowers` | Push to `https://github.com/AvaTar-ArTs/my-powers`. |
| Qwen governance markdown (copies) | `/Users/steven/supremepowers/docs/imported-qwen/` | Mirrors `~/.qwen` docs; see `IMPORT_PROVENANCE.md` there. |
| Qwen supremepower integration (archive) | `/Users/steven/supremepowers/docs/integrations/qwen-supremepower/` | Bootstrap / tool-mapping / command adapters. |

## Runtime & installs (not in git)

| Host | Path | Role |
|------|------|------|
| **Codex** superpowers shim | `~/.codex/superpowers` → **symlink** | **As of 2026-04-21** points to `/Users/steven/supremepowers` (was `/Users/steven/iterm2/superpowers`). Codex bootstrap reads skills from this tree. |
| **Gemini CLI** SupremePower extension | `~/.gemini/extensions/supremepower/` | Installed extension; sync from repo when you ship changes. |
| **Gemini** user overlay | `~/.supremepower/` | Custom skills/agents + `config.json`; small; keep for user-specific overrides. |
| **OpenCode** | `~/.config/opencode/superpowers/` | OpenCode install of shared `lib/skills-core.js` + plugin. |
| **Cursor** skills | `~/.cursor/skills/` | Superpowers-aligned entries are **symlinks** into `/Users/steven/supremepowers/skills/…` (updated 2026-04-21; was `iterm2/superpowers`). Other entries (e.g. `ask`, `git-ai-search`) may still point at `~/.git-ai/skills/`. |
| **Qwen** | `~/.qwen/` | Agents, `skills/`, `integrations/supremepower/`, `superpowers/` bundle, scripts (`qwen-sp`). |
| **Claude Code** | `~/.claude/` | Plugins (marketplace cache), `agents/`, `projects/`. |

## Symlink change log

| Date | Path | Before | After |
|------|------|--------|--------|
| 2026-04-21 | `~/.codex/superpowers` | `/Users/steven/iterm2/superpowers` | `/Users/steven/supremepowers` |
| 2026-04-21 | `~/.cursor/skills/*` (superpowers set) | `/Users/steven/iterm2/superpowers/skills/…` | `/Users/steven/supremepowers/skills/…` |

**Codex `qwen-integration` docs (host copy, not in git):** active `*.md` under `~/.codex/qwen-integration/` that still referenced `~/iterm2/superpowers` or `/Users/steven/iterm2/superpowers` were rewritten to `/Users/steven/supremepowers` (13 files, 2026-04-21). **`~/.codex/qwen-integration/rules/superpowers.mdc`** was updated so Cursor/Codex instructions match the symlinked layout (`~/.codex/superpowers/.codex/superpowers-codex` instead of the old `superpowers-codex-product` paths). Historical `.txt` transcripts under `references/` may still mention `iterm2/superpowers` by design.

If Codex or tooling misbehaves after the switch, restore with:

`ln -sfn /Users/steven/iterm2/superpowers /Users/steven/.codex/superpowers`

(only if that tree still exists and you prefer it again.)

To restore Cursor superpowers symlinks to the old tree (per skill):

`ln -sfn /Users/steven/iterm2/superpowers/skills/<name> ~/.cursor/skills/<name>`

## Comparison gaps (repo vs installs, 2026-04-21)

Byte-level scan (ignore `.git`, `node_modules`, `.DS_Store`). **“Missing”** means present in one tree, not the other, or same relative path with different content.

| Pair | Missing / drift (high signal) |
|------|-------------------------------|
| **Repo vs `~/.gemini/extensions/supremepower`** | Repo-only: new docs (`docs/imported-qwen/`, `ECOSYSTEM_MAP`, extra commands for ecosystem/workflow, `.opencode/plugins/`). Gemini-only: `.codex/.history` noise; dated `docs/plans/2025-*` filenames (repo keeps snapshots under `docs/plans/snapshots-from-installs/`). **Skills:** repo has **`ecosystem-clarity`** and **`workflow-bootstrap`** under `skills/` and `core/skills/`; Gemini install **does not** (still 14 classic dirs). **Diff:** `using-superpowers/SKILL.md` and several platform docs / `package.json` / `FUNDING.yml` (expected). |
| **Repo vs `~/.config/opencode/superpowers`** | OpenCode tree only lacks **dated** plan filenames; bodies overlap repo `docs/plans/` + snapshots. Many overlapping paths **differ** (install vs dev — refresh OpenCode from repo when you care). |
| **Repo vs `~/.qwen/integrations/supremepower/skills`** | Same 16 skill **names**; **14** `SKILL.md` bodies differ (Qwen adapters vs repo). Sync direction: choose whether Qwen is downstream of repo or maintained separately. |
| **Repo vs `iterm2/superpowers/skills`** | **Repo ahead:** `ecosystem-clarity`, `workflow-bootstrap`. **8** shared skills differ in content (repo vs iterm2); align iterm2 or treat iterm2 as legacy. |
| **Cursor** | After symlink update, Cursor superpowers set matches **repo** `skills/` (plus non-superpowers symlinks unchanged). |

**Optional follow-up:** copy `skills/ecosystem-clarity` and `skills/workflow-bootstrap` into `~/.gemini/extensions/supremepower/skills/` (and `core/skills/`) and regenerate Gemini slash-command stubs if you want the extension to match the repo skill roster.

## Consolidation discipline

1. **Edit skills/agents in the repo** when the change should be versioned and shared.
2. **Copy or reinstall** into Gemini / OpenCode / Cursor surfaces after release (each host has its own layout).
3. **Keep `~/.supremepower`** for personal overrides, not as a second full fork of everything.

## Large artifacts (not “duplicated skills”)

- **`~/.codex/logs_2.sqlite*`**, **`~/.claude/` plugin caches**, **`~/.cursor/` project data** — disk-heavy; rotate or prune separately from skill consolidation.
