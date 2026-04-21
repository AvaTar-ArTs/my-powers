# Supremepower incorporation — narrative blueprint

**Pattern:** narrative-blueprints (Concept + Monetization + Workflow). Not surface-level “how to invoke”; this explains what we did and why.

---

## Concept

**Supremepower incorporation** is the **generation** of an enhanced skill set into **~/.supremepower/skills/** from our **local Cursor-enhanced setup** (~/.cursor/skills/superpowers/skills/ plus workflow-bootstrap, ecosystem-clarity). We **generate** (not symlink) so Gemini gets skills tailored for the extension. Source of truth: Cursor; **regenerate** with `python3 ~/.cursor/scripts/generate-supremepower-skills.py` after improving the source. Value: **consistency**, **one place to edit**, **improvements flow into Gemini**.

---

## Monetization / value

- **For you:** No double maintenance. Improve a skill once (e.g. brainstorming, writing-plans) and both Cursor and Gemini see it. Fewer copies, fewer sync bugs.
- **For the system:** One canonical superpowers methodology (brainstorm → plan → execute with TDD/subagent-driven-development → review → finish). Same red flags, same “use skills when they apply” rule, same bite-sized plans and two-stage review whether you’re in Cursor or in Gemini with supremepower.
- **For future changes:** Writing-skills (TDD for skills) and systematic-debugging apply to one tree; you pressure-test and fix there, and Gemini benefits automatically.

---

## Workflow

1. **Config:** ~/.supremepower/config.json already sets `customSkillsPath: ~/.supremepower/skills` and `customAgentsPath: ~/.supremepower/agents`. No config change.
2. **Generate skills:** Run `python3 ~/.cursor/scripts/generate-supremepower-skills.py`. Add or keep workflow-bootstrap and ecosystem-clarity under ~/.supremepower/skills/.
3. **Agents:** ~/.supremepower/agents (empty).
4. **Edit (source):** ~/.cursor/skills/superpowers/skills. Regenerate after improvements.
5. **Verify:** Gemini = custom skills visible; Cursor = skills load from Cursor path.

Workflow: edit in Cursor, regenerate, Gemini uses the generated set.
