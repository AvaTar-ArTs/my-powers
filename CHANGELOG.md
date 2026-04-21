# Changelog

All notable changes to this repository are documented here.

This file highlights recent, high-signal changes. Historical deep release history remains in `RELEASE-NOTES.md`.

## [Unreleased]

### Added
- Added `.codex/package.json` with `"type": "commonjs"` so `.codex/superpowers-codex` runs correctly in this ESM repository.
- Added `docs/README.md` as a documentation index for platforms, ecosystem maps, imported mirrors, and changelog artifacts.
- Added detailed migration and verification log at `docs/changelogs/2026-04-20-ecosystem-and-flow-reliability.md`.

### Changed
- Hardened `scripts/generate-commands.js` to ignore hidden/non-directory entries in `skills/` (for example `.DS_Store`) during command generation.
- Materialized `superpowers/skills` and `superpowers/core/skills` as regular directories (copied files), replacing symlink-based layout.
- Aligned Codex host docs under `~/.codex/qwen-integration` to use `/Users/steven/supremepowers` canonical paths where appropriate.
- Updated `docs/ECOSYSTEM_MAP.md` with Codex alignment notes and symlink migration context.

### Verified
- `npm test` passes after migration and flow-hardening changes.
- `npm run generate:commands` runs cleanly with no `.DS_Store` errors.
- Codex bootstrap flows succeed:
  - `node .codex/superpowers-codex bootstrap`
  - `node .codex/superpowers-codex find-skills`
  - `node .codex/superpowers-codex use-skill superpowers:writing-plans`
- Hook flow works:
  - `hooks/session-start.sh` emits valid JSON and includes `using-superpowers` context injection.

