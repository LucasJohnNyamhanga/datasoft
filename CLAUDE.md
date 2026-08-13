# DataSoft monorepo

Two independently deployable apps live in this repo, each its own top-level directory (matches Laravel Cloud's monorepo model — each gets its own Cloud application rooted at its own directory):

- `frontend/` — the Next.js site (datasoft.co.tz). Has its own `frontend/CLAUDE.md` / `frontend/AGENTS.md` with framework-specific instructions; read those before working in `frontend/`.
- `backend/` — the Laravel API (contact form email sending, and future backend features).

Run frontend commands from inside `frontend/`, backend commands from inside `backend/`. There is no root-level build/install step tying the two together.
