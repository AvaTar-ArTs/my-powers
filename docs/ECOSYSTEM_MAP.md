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
| **Cursor** skills | `~/.cursor/skills/` | Cursor-native skill dirs (overlap names with superpowers). |
| **Qwen** | `~/.qwen/` | Agents, `skills/`, `integrations/supremepower/`, `superpowers/` bundle, scripts (`qwen-sp`). |
| **Claude Code** | `~/.claude/` | Plugins (marketplace cache), `agents/`, `projects/`. |

## Symlink change log

| Date | Path | Before | After |
|------|------|--------|--------|
| 2026-04-21 | `~/.codex/superpowers` | `/Users/steven/iterm2/superpowers` | `/Users/steven/supremepowers` |

If Codex or tooling misbehaves after the switch, restore with:

`ln -sfn /Users/steven/iterm2/superpowers /Users/steven/.codex/superpowers`

(only if that tree still exists and you prefer it again.)

## Consolidation discipline

1. **Edit skills/agents in the repo** when the change should be versioned and shared.
2. **Copy or reinstall** into Gemini / OpenCode / Cursor surfaces after release (each host has its own layout).
3. **Keep `~/.supremepower`** for personal overrides, not as a second full fork of everything.

## Large artifacts (not “duplicated skills”)

- **`~/.codex/logs_2.sqlite*`**, **`~/.claude/` plugin caches**, **`~/.cursor/` project data** — disk-heavy; rotate or prune separately from skill consolidation.
