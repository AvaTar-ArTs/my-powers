---
sidebar_position: 8
title: Changelog and Releases
---

# Changelog and Releases

SupremePower now uses a two-level release documentation model.

## Fast layer (recent operations)

- `CHANGELOG.md`
- Purpose: high-signal, recent changes and verification status
- Audience: active maintainers and day-to-day operators

## Historical layer (full narrative)

- `RELEASE-NOTES.md`
- Purpose: versioned release chronology and deeper historical context

## Detailed operational records

- `docs/changelogs/*.md`
- Purpose: focused migration logs, reliability investigations, and audit-grade context

## Authoring guidance

For meaningful infrastructure/runtime changes:

1. Update `CHANGELOG.md`
2. Add or update relevant `RELEASE-NOTES.md` entry
3. Add a detailed record in `docs/changelogs/`
4. Ensure docs index (`docs/README.md`) links remain correct

