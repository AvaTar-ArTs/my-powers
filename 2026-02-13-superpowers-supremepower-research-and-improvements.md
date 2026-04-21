# Superpowers & Supremepower Research — Improvements for Outputs, Workflow, and Abilities

**Date:** 2026-02-13  
**Scope:** obra/superpowers, supremepower (Gemini), Cursor skills alignment. Ties in: development-ecosystem-analysis, update-cursor-settings, managing-ecosystem-cleanup, test-skill-format.

---

## 1. Summary: Superpowers and Supremepower

| Concept | Source | What it is |
|--------|--------|------------|
| **Superpowers** | obra/superpowers (Claude Code plugin, Codex CLI) | Workflow + skills system: brainstorm → plan → implement (TDD, worktrees, subagent-driven or executing-plans) → finish → code review. Skills are mandatory when they apply; "if 1% chance a skill applies, invoke it." |
| **Supremepower** | Gemini extension (~/.gemini/extensions/supremepower/) | Same 14 superpowers-style skills + Gemini CLI commands (plan, brainstorm, tdd, debug, implement, sp/agents, sp/status). Mirrors superpowers for Gemini. |
| **Philosophy (from blog/README)** | Jesse’s blog, getting-started, writing-skills | (1) Use skills to do the activity; (2) Search/use skills before acting; (3) TDD for code and TDD for skills (pressure-test with subagents); (4) Evidence over claims; (5) Persuasion-aware design (authority, commitment, scarcity in skill instructions). |

---

## 2. Development-Ecosystem-Analysis: Superpowers/Supremepower Footprint

Phase 1–style inventory of where these live and how they relate.

| Location | Type | Contents |
|----------|------|----------|
| **~/.cursor/skills/** | Canonical Cursor skills | brainstorming, writing-plans, executing-plans, subagent-driven-development, finishing-a-development-branch, requesting/receiving-code-review, systematic-debugging, test-driven-development, using-git-worktrees, using-cursor-skills, verification-before-completion, dispatching-parallel-agents, writing-skills, cursor-workflow-bootstrap, etc. |
| **~/.codex/superpowers/** (Codex) | Git clone | Same skill set for Codex CLI; bootstrap loads using-superpowers. |
| **~/.gemini/extensions/supremepower/** | Gemini extension | skills/, commands/, core/skills/ — full set + writing-skills assets (anthropic-best-practices, persuasion-principles, testing-skills-with-subagents). |
| **~/.supremepower/** | Gemini custom root (config.json) | customSkillsPath → ~/.supremepower/skills (generated from Cursor-enhanced superpowers via generate-supremepower-skills.py; includes workflow-bootstrap, ecosystem-clarity); customAgentsPath → ~/.supremepower/agents. Single source of truth: edit in Cursor, Gemini uses same skills. See docs/plans/2026-02-13-supremepower-incorporation-design.md. |
| **cursor-ecosystem plugin cache** | Cached clone | `.cursor/plugins/cache/url/.../superpowers/<commit>/` — skills, agents, commands, hooks. Commit hash varies. |
| **Claude plugin cache** | Cached plugin | `.claude/plugins/cache/.../superpowers/` — same content for Claude Code. |

**Relationships:** Cursor’s canonical skills in ~/.cursor/skills/ are the ones we invoke in Cursor. Codex and Gemini have their own copies (Codex clone, supremepower). Plugin caches are duplicates for discovery/install; not the source of truth for Cursor execution.

---

## 3. Managing-Ecosystem-Cleanup Relevance

- **Duplicates:** Superpowers content exists in (1) ~/.cursor/skills/, (2) cursor-ecosystem plugin cache, (3) Claude cache, (4) Codex ~/.codex/superpowers/, (5) Gemini supremepower.  
- **Audit (no delete here):** ~/.cursor/skills/ is canonical for Cursor; do not remove. Plugin caches can be audited with `ecosystem-cleanup audit` if configured for cursor-ecosystem; cleanup would only remove cache copies, not ~/.cursor/skills/.  
- **Consolidation:** One canonical copy per platform (Cursor = ~/.cursor/skills/; Codex = ~/.codex/superpowers/; Gemini = supremepower). No single “merge” — each platform uses its own paths.

---

## 4. Concrete Improvements to Outputs, Workflow, and Abilities

### 4.1 Outputs

- **Evidence over claims:** Already covered by **verification-before-completion**. When claiming “done,” verify (tests, behavior, checklist).  
- **Chunked design for validation:** **brainstorming** already encourages one-question-at-a-time and staged design; **writing-plans** produces a plan clear enough for “engineer with zero context.” No change required; reinforce in reminders if outputs are vague.  
- **Optional:** Add one line to CURSOR_CHEATSHEET or cursor-workflow-bootstrap: “Claims require evidence (verification-before-completion).”

### 4.2 Workflow

- **Flow already aligned:** cursor-workflow-bootstrap matches superpowers: brainstorm → writing-plans → executing-plans or subagent-driven-development → finishing-a-development-branch; code-reviewer + requesting/receiving-code-review.  
- **Two-stage review:** subagent-driven-development already specifies spec-compliance review then code-quality review. No change.  
- **Using skills first:** using-cursor-skills already enforces “when a skill might apply, follow it; check before responding or exploring.” Aligns with superpowers “1% chance → invoke.”

### 4.3 Abilities

- **Invoke skill when it might apply:** Enforced by **using-cursor-skills** (and cursor-workflow-bootstrap “When a skill applies”).  
- **TDD for skills:** **writing-skills** should reference pressure-testing with subagents (realistic scenarios, not quizzes). If our writing-skills skill doesn’t, add: “Pressure-test new skills with subagents in realistic scenarios; fix loopholes (TDD for skills).”  
- **Persuasion-aware design:** Optional note for skill authors: skills can use authority, commitment, scarcity in instructions to increase compliance (see exploration_superpowers_ecosystems doc / writing-skills assets). No mandatory change.  
- **update-cursor-settings:** No Cursor setting required for superpowers; skills are file-based. When user asks for theme/font/format-on-save etc., use **update-cursor-settings** as already documented.

### 4.4 test-skill-format

- Use **test-skill-format** (and **create-skill**) when adding or changing skills from this research: frontmatter (name, description), markdown body, &lt;500 lines, WHAT+WHEN in description.

---

## 5. Improvements Applied in This Repo

1. **This doc** — Research and improvement checklist in one place.  
2. **Cheatsheet** — Add “Superpowers philosophy” line (evidence, mandatory skills, TDD for skills) in §9 or quick-ref so it’s visible.  
3. **Reference inventory** — Add this plan to the plans/index so “superpowers/supremepower research” is findable.  
4. **Optional skill tweak:** In **writing-skills** (if we have one under ~/.cursor/skills/), add one sentence: “Pressure-test new skills with subagents in realistic scenarios (TDD for skills).”  
5. **development-ecosystem-analysis:** When running ecosystem analysis, include “superpowers/supremepower footprint” (this §2 table) as a standard check.  
6. **managing-ecosystem-cleanup:** When auditing, treat plugin cache copies of superpowers as optional cleanup candidates; never list ~/.cursor/skills/ for removal.

---

## 6. Key References (and incorporation)

- **Incorporation design:** ~/.cursor/docs/plans/2026-02-13-supremepower-incorporation-design.md  
- **Narrative blueprint:** ~/.cursor/docs/plans/2026-02-13-supremepower-incorporation-narrative.md  
- Jesse’s blog: https://blog.fsck.com/2025/10/09/superpowers/  
- obra/superpowers README: https://github.com/obra/superpowers  
- Exploration report: ~/iterm2/docs/exploration_superpowers_ecosystems_2026-02-10.md  
- Cursor bootstrap: ~/.cursor/skills/cursor-workflow-bootstrap/SKILL.md  
- Using Cursor skills: ~/.cursor/skills/using-cursor-skills/SKILL.md  
