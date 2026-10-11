import { createContext, useContext, useEffect, useState } from 'react';
import { pageForPath } from './routes';

export const LANGS = ['es', 'en'];
const LanguageContext = createContext(['es', () => {}]);

// A localized address wins (/privacy is English), then the saved choice, then the browser language; Spanish is the default.
function initialLang() {
  const page = pageForPath(window.location.pathname);
  if (page) return page.lang;
  try {
    const saved = localStorage.getItem('notara-lang');
    if (LANGS.includes(saved)) return saved;
  } catch (e) {}
  return (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('notara-lang', lang); } catch (e) {}
  }, [lang]);
  return <LanguageContext.Provider value={[lang, setLang]}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
