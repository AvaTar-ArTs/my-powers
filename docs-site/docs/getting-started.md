---
sidebar_position: 2
title: Getting Started
---

# Getting Started

This guide gets SupremePower docs and core workflows running locally.

## Prerequisites

- Node.js 20+
- npm
- Repository cloned at `/Users/steven/supremepowers` (or your own path)

## Install dependencies

At repository root:

```bash
npm install
```

At docs site root:

```bash
cd docs-site
npm install
```

## Validate core repository health

From repo root:

```bash
npm test
npm run generate:commands
```

Expected behavior:

- Jest passes current test suites.
- Commands are generated from `skills/` into `commands/skills/`.

## Run docs locally

From `docs-site/`:

```bash
npm run start
```

Then open the local URL printed by Docusaurus.

## Production docs build

From `docs-site/`:

```bash
npm run build
```

Build output is emitted to `docs-site/build/`.

## Recommended workflow for docs updates

1. Update source docs and release/changelog artifacts in repo root.
2. Reflect navigation or structure updates in `docs-site/docs/` and `sidebars.ts`.
3. Run:
   - `npm test` (repo root)
   - `npm run build` (docs-site)
4. Commit in a docs-focused changeset.

