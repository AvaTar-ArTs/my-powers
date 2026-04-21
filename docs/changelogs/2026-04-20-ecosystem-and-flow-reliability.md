# 2026-04-20 Ecosystem and Flow Reliability Changelog

## Scope

This changelog captures the consolidation, alignment, and runtime-hardening work completed across repository docs, Codex integration paths, skill trees, and hook/flow verification.

## Goals

- Align canonical source-of-truth to `/Users/steven/supremepowers` and `my-powers`.
- Remove operational ambiguity between mirrored skill trees.
- Keep installer/runtime behavior stable across Codex, Cursor, Gemini, OpenCode, and hook flows.
- Verify that planning and skill invocation paths still work end-to-end.

## Changes by Area

### 1) Canonical Path Alignment

- Codex home shim verified and aligned:
  - `~/.codex/superpowers -> /Users/steven/supremepowers`
- Codex integration markdown under `~/.codex/qwen-integration` rewritten where active docs still referenced legacy `iterm2/superpowers` paths.
- `~/.codex/qwen-integration/rules/superpowers.mdc` updated to reference current canonical layout and CLI pathing.
- Documentation updated in `docs/ECOSYSTEM_MAP.md`.

### 2) Skill Tree Dedup + Materialization Decision

- Temporary symlink dedup was trialed for:
  - `superpowers/skills -> ../skills`
  - `superpowers/core/skills -> ../../core/skills`
- Decision reversed for compatibility: replaced symlinks with real copied files so all installers/tools that expect normal directories continue to work.
- Final state:
  - `superpowers/skills/` is a real directory tree.
  - `superpowers/core/skills/` is a real directory tree.

### 3) Codex Runtime Reliability Fix

- Added `.codex/package.json`:
  - `{ "type": "commonjs" }`
- Reason:
  - Repository root is ESM (`"type": "module"`), while `.codex/superpowers-codex` is CommonJS.
  - Without a local package boundary, Node interprets `.codex/superpowers-codex` as ESM and fails on `require(...)`.

### 4) Command Generation Hardening

- Updated `scripts/generate-commands.js`:
  - switched to `fs.readdir(..., { withFileTypes: true })`
  - skip hidden entries and non-directories before resolving `SKILL.md`
- Result:
  - no `.DS_Store` ENOTDIR warning noise during generation on macOS.

## Verification Evidence

### Runtime/Flow Checks

- `node .codex/superpowers-codex find-skills` succeeds.
- `node .codex/superpowers-codex use-skill superpowers:writing-plans` succeeds.
- `node .codex/superpowers-codex bootstrap` succeeds.
- Writing-plans content check confirms expected title, purpose text, and plan-save convention.

### Command and Test Checks

- `npm run generate:commands` succeeds with:
  - `Generated 16 command files, skipped 0`
- `npm test` passes:
  - 15/16 suites run, 15 pass, 1 skipped (existing skip)
  - 90 passed tests, 17 skipped tests

### Hook Output Checks

- `hooks/session-start.sh` emits valid JSON.
- Output includes `<EXTREMELY_IMPORTANT>` block and injected `using-superpowers` skill content.

## Files Added or Updated (high-signal)

- Added: `.codex/package.json`
- Updated: `scripts/generate-commands.js`
- Updated: `RELEASE-NOTES.md` (new `v4.0.4` entry)
- Added: `CHANGELOG.md`
- Added: `docs/README.md`
- Added: `docs/changelogs/2026-04-20-ecosystem-and-flow-reliability.md`
- Updated: `docs/ECOSYSTEM_MAP.md`

## Operational Notes

- `superpowers/tests/` intentionally remains a real distinct tree; root `tests/` is a superset and includes differences.
- Host-side docs/transcripts may still preserve legacy references in historical text blocks by design.

