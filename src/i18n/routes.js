// Localized addresses for the legal pages. The address decides the language it is shown in.
export const PATHS = {
  es: { privacy: '/privacidad', terms: '/terminos' },
  en: { privacy: '/privacy', terms: '/terms' },
};

// Returns { page, lang } when the path is a localized legal page, otherwise null.
export function pageForPath(pathname) {
  for (const lang of Object.keys(PATHS)) {
    for (const [page, path] of Object.entries(PATHS[lang])) {
      if (pathname === path) return { page, lang };
    }
  }
  return null;
}
