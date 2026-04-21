---
sidebar_position: 5
title: Skills and Agents
---

# Skills and Agents

SupremePower combines deterministic process skills with role-specialized agent personas.

## Process-critical skills

- `using-superpowers`
- `brainstorming`
- `writing-plans`
- `test-driven-development`
- `systematic-debugging`
- `verification-before-completion`
- `finishing-a-development-branch`

## Collaboration and quality skills

- `requesting-code-review`
- `receiving-code-review`
- `dispatching-parallel-agents`
- `subagent-driven-development`
- `using-git-worktrees`
- `writing-skills`
- `executing-plans`

## Interaction rhythm

The updated `using-superpowers` guidance enforces this sequence:

- `request -> skill check -> invoke skill`
- `skill loaded -> announce usage -> execute flow`
- `blocked -> gather evidence -> continue`
- `complete -> verify -> deliver result`

For build flows:

- `brainstorming -> writing-plans -> test-driven-development -> requesting-code-review -> verification-before-completion -> finishing-a-development-branch`

## Agent personas

Representative personas include architecture, backend, frontend, testing, performance, security, and code review specializations.

See:

- `agents/`
- `core/agents/`

## Where to edit what

- Edit canonical skill content in `skills/` and `core/skills/`.
- Keep mirrored host copies in sync when necessary.
- Validate with `npm test` and platform-specific smoke checks.

