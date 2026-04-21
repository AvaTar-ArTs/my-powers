---
sidebar_position: 6
title: Hooks and Flows
---

# Hooks and Flows

This page documents the operational flow surfaces that must remain stable.

## Session start hook (Claude-style)

Files:

- `hooks/hooks.json`
- `hooks/session-start.sh`
- `hooks/run-hook.cmd`

Behavior:

- Injects `using-superpowers` context at session start.
- Emits JSON payload with `hookSpecificOutput`.
- Adds warning context if legacy skill paths are detected.

## Codex bootstrap flow

Files:

- `.codex/superpowers-codex`
- `.codex/superpowers-bootstrap.md`
- `.codex/package.json`

Expected commands:

```bash
node .codex/superpowers-codex bootstrap
node .codex/superpowers-codex find-skills
node .codex/superpowers-codex use-skill superpowers:writing-plans
```

## Command generation flow

Source:

- `scripts/generate-commands.js`

Output:

- `commands/skills/*.toml`

Hardening:

- Hidden/non-directory entries in `skills/` are ignored to prevent macOS artifact failures.

## Verification checklist

Run from repo root:

```bash
npm test
npm run generate:commands
bash hooks/session-start.sh
```

For docs release:

```bash
cd docs-site
npm run build
```

