# OpenCode layouts in this repo

- **`plugin/superpowers.js`** — Primary plugin used by current OpenCode installs that expect `~/.config/opencode/superpowers/.opencode/plugin/` (singular `plugin`). Uses `lib/skills-core.js` and registers custom tools.

- **`plugins/superpowers.js`** — Alternate bootstrap-oriented copy from the **Codex** tree (`~/.codex/superpowers/.opencode/plugins/`). Some installs use a **`plugins`** directory (plural). Keep both until OpenCode standardizes; compare when debugging cross-host behavior.
