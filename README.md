# NSG site

Static marketing site for NSG Solutions, built with [Astro](https://astro.build/) and deployed as static HTML (e.g. Vercel).

## Prerequisites

- Node.js 20+ (CI uses 22)

## Setup

```bash
npm ci
```

Copy `.env.example` to `.env` if you need to override defaults. The contact form posts to Formspree; set `PUBLIC_CONTACT_FORM_ENDPOINT` to your full form URL (for example `https://formspree.io/f/your-id`). If unset, the production endpoint bundled in the repo is used.

## Commands

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Local dev server                     |
| `npm run build`   | Production build → `dist/`           |
| `npm run preview` | Serve `dist/` locally                |
| `npm run check`   | `astro check` (TypeScript / Astro)   |
| `npm run format`  | Format with Prettier                 |
| `npm run format:check` | Verify formatting (used in CI) |

## CI

GitHub Actions runs `check`, `format:check`, and `build` on push and pull requests to `main` or `master`.
