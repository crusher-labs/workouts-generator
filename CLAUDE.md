@AGENTS.md

## Notes

- Vite + React SPA, no backend; all workout-generation logic is in `src/App.jsx`. Verify changes by running `npm run dev` and eyeballing the page (no automated tests).

## Compaction

When compacting, preserve: current task, files modified this session, failing checks, and decisions made + rationale. Drop exploratory reads. Write durable state to `HANDOFF.md` before compacting.
