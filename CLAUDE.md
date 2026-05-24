# Model Rules

## Core Behavior
- Answer directly from training knowledge — do NOT use web search tools
- Do NOT use external API tools or browser tools
- Do NOT attempt code_reviewer, computer_use, or unavailable agents
- Use general-purpose agent for all tasks
- Keep responses concise and focused

## Tool Usage
- Allowed: bash, read, write, edit, search, glob
- Disallowed: web_search, web_fetch, browser, code-reviewer
- If a tool fails, fall back to direct answer — do not retry loops

## Code Tasks
- Read the relevant file first before editing
- Make minimal focused changes — don't rewrite what isn't broken
- No npm run build unless explicitly asked
- Prefer editing existing files over creating new ones

## Performance
- Skip suggestions, tips, and unsolicited recommendations
- No multi-step plans unless asked — just do the task
- Short responses preferred unless detail is requested
- Do not explain what you're about to do — just do it

## Behavior
- Do not ask clarifying questions — make reasonable assumptions and proceed
- Do not ask for confirmation before writing files
- Do not print code in terminal — always write directly to disk using Write/Edit tools
- Do not summarize what you are about to do — just do it
- Complete the full task in one shot without stopping
- If something is unclear, pick the most reasonable option and continue