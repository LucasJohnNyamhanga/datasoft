# DataSoft

Two independently deployable apps in one repo:

- [`frontend/`](frontend/) — the Next.js site (datasoft.co.tz).
- [`backend/`](backend/) — the Laravel API (contact form email sending, and future backend features).

Each app is self-contained with its own dependencies, env vars, and dev server — run commands from inside the relevant directory, not the repo root.

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Backend

```bash
cd backend
composer install
php artisan serve
```

Runs on [http://localhost:8000](http://localhost:8000). The frontend's `NEXT_PUBLIC_API_URL` (see `frontend/.env.local`) should point here in development.

## Deployment

Both apps deploy to [Laravel Cloud](https://laravel.com/blog/deploy-nextjs-and-nuxt-apps-on-laravel-cloud) as separate applications from this same repository, each rooted at its own top-level directory.
