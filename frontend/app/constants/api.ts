// Hardcoded rather than read from NEXT_PUBLIC_API_URL: Next.js inlines
// NEXT_PUBLIC_* vars at build time, and Laravel Cloud's build step wasn't
// picking up the dashboard env var, so the deployed bundle shipped with an
// unresolved reference and the contact form silently posted to a broken URL.
export const API_BASE_URL = "https://datasoftbackend.laravel.cloud";
