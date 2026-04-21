# Supremepower incorporation design

**Date:** 2026-02-13  
**Method:** **Brainstorming** (understand idea → explore approaches → design); **writing-skills** (TDD for skills, single source of truth); **systematic-debugging** (root cause before fix); **test-driven-development** / **subagent-driven-development** (discipline); **narrative-blueprints** (value/workflow).

**Scope:** Improve, enhance, and incorporate **~/.supremepower** with Cursor’s superpowers so one methodology and one editable skill set drive both Cursor and Gemini (supremepower extension).

---

## 1. Understanding the idea (brainstorming)

**Goal:** Incorporate ~/.supremepower so it is not a dead or duplicate config dir but a live part of the superpowers/supremepower workflow.

**Current state:**
- **~/.supremepower/config.json** points to `customSkillsPath: ~/.supremepower/skills` and `customAgentsPath: ~/.supremepower/agents`. Those dirs did not exist; the extension falls back to bundled skills/agents.
- **~/.cursor/skills/superpowers/skills/** holds the full superpowers skill set (brainstorming, writing-plans, executing-plans, writing-skills, systematic-debugging, test-driven-development, subagent-driven-development, receiving/requesting-code-review, dispatching-parallel-agents, using-git-worktrees, finishing-a-development-branch, verification-before-completion, using-superpowers).
- **~/.gemini/extensions/supremepower/** ships its own copy of skills and commands; config allows overriding with custom paths.

**Success criteria:**
- One canonical place to edit superpowers-style skills that affect both Cursor and Gemini.
- ~/.supremepower used as the Gemini-side custom root (config already points there).
- No surface-level “how to invoke” doc only—actual structure and linkage.

---

## 2. Approaches considered

| Approach | Description | Trade-off |
|----------|-------------|-----------|
| **A. Symlink ~/.supremepower/skills → ~/.cursor/skills/superpowers/skills** | Gemini’s custom skills path becomes the Cursor superpowers tree. One edit in Cursor updates Gemini. | Requires dirs to exist; symlink works on macOS/Linux. Gemini must accept dir structure (skills as subdirs with SKILL.md). |
| **B. Copy Cursor superpowers into ~/.supremepower/skills and sync script** | Two copies; run a sync script when Cursor skills change. | Duplication; risk of drift. |
| **C. Leave ~/.supremepower as config-only; document “use Gemini extension’s bundled skills”** | No structural change. | No incorporation; ~/.supremepower remains underused. |

**Recommendation:** **A.** Single source of truth (Cursor superpowers), no sync script, no drift. Writing-skills and TDD for skills apply to one tree; Gemini reads it via ~/.supremepower/skills.

---

## 3. Design

### 3.1 Directory layout (after incorporation)

- **~/.supremepower/config.json** — Unchanged (already points to ~/.supremepower/skills and ~/.supremepower/agents).
- **~/.supremepower/skills** — **Generated** Run ~/.cursor/scripts/generate-supremepower-skills.py from ~/.cursor/skills/superpowers/skills/; plus workflow-bootstrap, ecosystem-clarity. Regenerate after improving source.
- **~/.supremepower/agents** — **Directory** (empty). Extension uses bundled agents until we add custom ones.

### 3.2 Skill format compatibility

- Cursor and supremepower both use **SKILL.md** with YAML frontmatter (name, description) and markdown body. No format change required.
- **using-superpowers** in Cursor’s tree refers to “Skill tool” (Claude/OpenCode); in Gemini, the extension provides equivalent command/skill loading. Content (rules, red flags, flow) stays the same.

### 3.3 Methodology alignment (not surface-level)

- **Brainstorming:** Used for this design (one goal, two approaches, recommendation). Future changes to the workflow (e.g. new skills) should start with brainstorming before implementation.
- **Writing-skills:** Any new or changed skill in ~/.cursor/skills/superpowers/skills/ should follow TDD for skills (pressure-test with subagents, baseline failure, then skill, then compliance). That single tree is the one we test and refine.
- **Systematic-debugging:** If something breaks (e.g. Gemini doesn’t load a skill), root-cause first: check path resolution, config, and extension expectations before changing content.
- **Test-driven-development / subagent-driven-development:** Execution discipline (red-green-refactor, two-stage review) applies to implementation work that touches this tree; the tree itself is the shared asset.
- **Receiving/requesting-code-review, verification-before-completion, finishing-a-development-branch:** Apply when making code or skill changes that affect the superpowers/supremepower flow.

### 3.4 Plugins (Cursor) and extension (Gemini)

- Cursor plugins (plugin-dev, hookify, pr-review-toolkit, agent-sdk-dev, feature-dev, security-guidance, explanatory-output-style) live in Cursor’s plugin system; they are not copied into ~/.supremepower. The incorporation is about **skills and config**, not duplicating plugins. Where a plugin overlaps with a skill (e.g. explanatory-output-style vs adapt-into-your-style), the skill in ~/.cursor/skills/superpowers/skills/ or ~/.cursor/skills/ remains the Cursor-side source; ~/.supremepower gains the superpowers skill set via generation (run the script).

---

## 4. Implementation (bite-sized)

1. Create **~/.supremepower/agents** (directory) if it does not exist.
2. **Generate skills:** Run `python3 ~/.cursor/scripts/generate-supremepower-skills.py`. Add enhanced skills (workflow-bootstrap, ecosystem-clarity) under ~/.supremepower/skills/.
3. Verify: `ls ~/.supremepower/skills` shows 14 generated + workflow-bootstrap + ecosystem-clarity (16 total).
4. Document in narrative blueprint and in this design; add ~/.supremepower to superpowers/supremepower footprint in research doc.

---

## 5. References

- **Superpowers/supremepower research:** ~/.cursor/docs/plans/2026-02-13-superpowers-supremepower-research-and-improvements.md  
- **Brainstorming:** ~/.cursor/skills/superpowers/skills/brainstorming/SKILL.md  
- **Writing-skills:** ~/.cursor/skills/superpowers/skills/writing-skills/SKILL.md  
- **Narrative blueprint:** ~/.cursor/docs/plans/2026-02-13-supremepower-incorporation-narrative.md (created with this design)
