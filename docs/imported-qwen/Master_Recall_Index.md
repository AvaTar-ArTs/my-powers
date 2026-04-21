# Qwen Master Recall Index

**Purpose:** One place to recall where capability documentation lives and which Qwen-native surface to invoke first (skill, agent, script, or integration docs).

## Quick Start

1. Read `/Users/steven/supremepowers/docs/imported-qwen/QWEN_SYSTEM_DEFINITION.md` for full-system context.
2. Match user intent in `/Users/steven/supremepowers/docs/imported-qwen/Use_Cases_And_Triggers.md`.
3. Pull full roster from `/Users/steven/supremepowers/docs/imported-qwen/QWEN_INVOKE_INDEX_BY_TYPE.md`.
4. Use `/Users/steven/supremepowers/docs/imported-qwen/docs/SOURCE_OF_TRUTH_AND_LAYERS.md` before editing any non-trivial path.

## Core Docs (Current)

| Doc | Path | Use when |
|-----|------|----------|
| System definition | `/Users/steven/supremepowers/docs/imported-qwen/QWEN_SYSTEM_DEFINITION.md` | Full behavior model and terminology. |
| Logic flows | `/Users/steven/supremepowers/docs/imported-qwen/Logic_Flows.md` | Flow routing and process sequencing. |
| Use cases and triggers | `/Users/steven/supremepowers/docs/imported-qwen/Use_Cases_And_Triggers.md` | Match user goals to execution flows. |
| Working principles | `/Users/steven/supremepowers/docs/imported-qwen/Working_Principles.md` | Guardrails and behavior standards. |
| Invoke index by type | `/Users/steven/supremepowers/docs/imported-qwen/QWEN_INVOKE_INDEX_BY_TYPE.md` | Full roster by skills/agents/scripts/hooks. |
| Source-of-truth model | `/Users/steven/supremepowers/docs/imported-qwen/docs/SOURCE_OF_TRUTH_AND_LAYERS.md` | Canonical vs adaptation vs runtime vs archive. |
| Edit boundary quickcheck | `/Users/steven/supremepowers/docs/imported-qwen/docs/EDIT_BOUNDARY_QUICKCHECK.md` | Fast path-level edit decisions. |
| Hooks model and implementation | `/Users/steven/supremepowers/docs/imported-qwen/docs/HOOKS_MODEL_AND_IMPLEMENTATION.md` | Bootstrap/runtime hook boundaries. |
| Learning/explanatory styles pointer | `/Users/steven/supremepowers/docs/imported-qwen/Learning_Explanatory_Styles.md` | Active style-path references. |
| Installation host crosswalk | `/Users/steven/supremepowers/docs/imported-qwen/docs/INSTALLATION_HOST_CROSSWALK.md` | Choose install docs by host (Qwen/Codex/OpenCode/Gemini). |

## Primary Runtime Surfaces

| Surface | Path | Notes |
|--------|------|-------|
| Supremepower standard baseline | `~/.supremepower/skills/` | Typical baseline standard surface. |
| Superpowers skills (Qwen adapted runtime) | `~/.qwen/superpowers/skills/` | Qwen-local adapted/operational layer. |
| General skills | `~/.qwen/skills/` | Includes Qwen-native and imported skills. |
| Agents | `~/.qwen/agents/` | Agent/persona execution layer. |
| Orchestrator | `~/.qwen/scripts/qwen-sp` | Qwen superpowers CLI (`bootstrap`, `skills`, `agents`, `use`, `map`, `status`). |
| Supremepower integration layer | `~/.qwen/integrations/supremepower/` | Cross-platform adapter docs/commands/hooks. |

## Known Historical/Non-Canonical References

Treat these as historical artifacts if found in older docs:

- `~/.qwen/scripts/inventory-analyzer.sh` (not present)
- `/Users/steven/supremepowers/docs/imported-qwen/docs/Ecosystem_Map.md` (not present)
- `/Users/steven/supremepowers/docs/imported-qwen/docs/Best_Practices.md` (not present)
- `/Users/steven/supremepowers/docs/imported-qwen/docs/Troubleshooting.md` (not present)
- `~/.qwen/learning-output-style/latest/` and `~/.qwen/explanatory-output-style/latest/` (use active hash paths referenced by `Learning_Explanatory_Styles.md`)

When stale references appear, prefer current documents in this index and log decisions in `/Users/steven/supremepowers/docs/imported-qwen/docs/learned-context.md`.
