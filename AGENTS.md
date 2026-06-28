# AGENTS.md - workouts-generator

`workouts-generator` is a crusher-labs site experiment (the experimental org). One-off static web app.

Workspace rules: `x:\crusher-labs\AGENTS.md`. Global rules: `~/.claude/CLAUDE.md`. This file only adds what is specific to this repo.

## What it is

"FitGen", a personalized workout-plan generator. A visitor answers a questionnaire (age, weight, height, goal, fitness level, days/week, focus areas, equipment) and the app generates a plan (exercises, cardio, BMI, recommendations) entirely client-side. No backend, no API, no persistence; all generation logic lives in `src/App.jsx`.

- Stack: Vite 4 + React 18, Tailwind CSS 3 (`darkMode: class`), Radix UI primitives (shadcn-style components under `src/components/ui`), framer-motion for animation, lucide-react icons, react-helmet for `<head>`.
- Origin: exported from Hostinger Horizons (see the `generator` meta tag in `index.html`). `package.json` name is the generic `web-app`.
- Build output: static `dist/` from `vite build`. Host-agnostic; deploy the build to any static host. No `.github/workflows`, no `vercel.json`, no `CNAME` present, so hosting is not wired in this repo.
- Path alias: `@` resolves to `./src` (see `vite.config.js`).

## Commands

| Task | Command |
| --- | --- |
| Install | `npm install` |
| Dev server (port 3000) | `npm run dev` |
| Production build | `npm run build` |
| Preview built app (port 3000) | `npm run preview` |

No test or lint script is defined. `eslint` is installed but has no npm script and no config file checked in.

## Conventions

- `build` runs `node tools/generate-llms.js || true` before `vite build`; `tools/` does not exist, so that step is a deliberate no-op (the `|| true` swallows it). Leave it or remove it; do not add a stub just to satisfy it.
- shadcn-style UI lives in `src/components/ui`; feature sections live directly in `src/components`.
- Theme colors are CSS variables (`hsl(var(--...))`) wired through `tailwind.config.js`; the brand accent is `#B1F82A` on a near-black background.

## What NOT to do

- Only `main` exists (no `dev` branch). Do not commit code straight to `main`; create `dev` first (`git checkout -b dev main`) and work there. Docs-only changes on `main` are fine.
- No `Co-Authored-By` or AI-attribution trailers in commits. User identity only.
- Do not put secrets in tracked files. `.env*` is gitignored; keep it that way.
- Do not commit `dist/` or `node_modules/` (both gitignored).
