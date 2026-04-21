---
sidebar_position: 4
title: Architecture
---

# Architecture

SupremePower is organized as shared behavior + host adapters.

## Core layers

## Skills layer

- `skills/` and `core/skills/` contain operational workflows.
- Skills are markdown-first with frontmatter metadata.
- Supporting references live beside skill files.

## Agent layer

- `agents/` and `core/agents/` define persona behavior.
- Agent activation is driven by orchestration logic and task context.

## Orchestration + libraries

- `core/orchestration/` handles parsing and matching.
- `lib/skills-core.js` provides reusable discovery/parsing helpers.
- `lib/agent-loader.js` normalizes agent loading.

## Platform adapters

- `.codex/` for Codex CLI bootstrap/use-skill/find-skills
- `.claude-plugin/` + `hooks/` for Claude Code integration
- `.opencode/` for OpenCode plugin integrations
- `mcp-server/` for Gemini-compatible MCP layer

## Documentation/operations layers

- `docs/` for reference, maps, and imported mirrors
- `CHANGELOG.md` for current high-signal changes
- `RELEASE-NOTES.md` for release chronology

## Design principles

- Keep runtime code and verification code separate.
- Prefer explicit workflow skills over implicit behavior.
- Validate changes with test and flow checks before release.
- Keep host-specific logic minimal and documented.

