---
sidebar_position: 9
title: Contributing Docs
---

# Contributing Documentation

This project treats documentation as operational infrastructure.

## Principles

- Keep docs synchronized with actual runtime behavior.
- Prefer explicit command examples over vague prose.
- Record verification evidence for behavioral claims.
- Separate historical narrative from current operational state.

## Where to write

- Global map and ops notes: `docs/`
- Docusaurus portal docs: `docs-site/docs/`
- Recent changes: `CHANGELOG.md`
- Release history: `RELEASE-NOTES.md`
- Deep migration logs: `docs/changelogs/`

## Required validation before docs merge

From repo root:

```bash
npm test
npm run generate:commands
```

From `docs-site/`:

```bash
npm install
npm run build
```

## Suggested commit style

- `docs: ...` for documentation-only changes
- include why the doc changed, not just what moved

