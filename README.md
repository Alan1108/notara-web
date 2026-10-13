# Notara (React)

React + Vite port of the static Notara site (home, privacidad, términos). Uses [pnpm](https://pnpm.io) (version pinned in `package.json`'s `packageManager`).

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # outputs dist/
pnpm preview  # serves dist/
```

Routes: `/` (home), `/privacidad` and `/terminos` (Spanish), `/privacy` and `/terms` (English). The old `*.html` URLs redirect to them.

The original stylesheets are kept verbatim in `src/styles/` and each page injects only its own
stylesheet, so the home and legal pages render exactly like the static versions.
When deploying `dist/`, configure the host to fall back to `index.html` for unknown paths (SPA routing). On Vercel this is done by the rewrite in `vercel.json`.

`pnpm-workspace.yaml` allows esbuild's install script (pnpm blocks dependency build scripts by default; Vite needs esbuild's binary).

## Localization (es / en)

The site is available in Spanish and English. Visitors switch with the ES / EN toggle in the header (or the
"Español · English" links in the home footer); the choice is saved in `localStorage` (`notara-lang`), and first-time
visitors get English if their browser language is English, Spanish otherwise.

- `src/i18n/LanguageContext.jsx` — current language (`useLang()`), persistence and `<html lang>`.
- `src/i18n/routes.js` — localized legal page addresses. The address decides the language (`/privacy` always opens
  in English), and switching language on a legal page moves to the other address.
- `src/i18n/common.js` — strings shared by all pages (header controls, footer, legal page header).
- `src/i18n/home.jsx` — home page copy.
- `src/pages/Privacidad.jsx`, `src/pages/Terminos.jsx` — each holds a `BodyEs` and a `BodyEn` version of the legal text.
