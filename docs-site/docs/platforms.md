---
sidebar_position: 3
title: Platform Integrations
---

# Platform Integrations

SupremePower supports multiple host environments through platform-specific adapters over shared core assets.

## Supported platforms

## Gemini CLI

- Model: extension + MCP tooling
- Key files:
  - `gemini-extension.json`
  - `mcp-server/`
  - `commands/`
- Runtime strengths:
  - slash-command style workflows
  - tool-backed skill orchestration

## Claude Code

- Model: plugin hooks + native Skill tool
- Key files:
  - `.claude-plugin/`
  - `hooks/`
  - `skills/`

## Codex

- Model: bootstrap CLI + skill loader
- Key files:
  - `.codex/superpowers-codex`
  - `.codex/superpowers-bootstrap.md`
  - `.codex/package.json` (CommonJS boundary)

## OpenCode

- Model: plugin with custom tools and skill resolution
- Key files:
  - `.opencode/plugin/superpowers.js`
  - `.opencode/plugins/superpowers.js`
  - `lib/skills-core.js`

## Cross-platform strategy

- Keep canonical skill content in repo roots (`skills/`, `core/skills/`).
- Keep platform adapters thin and focused on runtime wiring.
- Verify changes with platform-relevant smoke tests before releases.

## Deep references

- `docs/platforms/gemini-cli.md`
- `docs/platforms/claude-code.md`
- `docs/platforms/codex.md`
- `docs/platforms/opencode.md`
- `docs/ECOSYSTEM_MAP.md`

