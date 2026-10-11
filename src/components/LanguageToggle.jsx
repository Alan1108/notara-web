import { useLocation, useNavigate } from 'react-router-dom';
import { LANGS, useLang } from '../i18n/LanguageContext';
import { COMMON } from '../i18n/common';
import { PATHS, pageForPath } from '../i18n/routes';

const LABELS = { es: ['ES', 'Español'], en: ['EN', 'English'] };

// Changes the language; on a legal page it also moves to that page's address in the new language.
function useSwitchLang() {
  const [, setLang] = useLang();
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  return l => {
    setLang(l);
    const page = pageForPath(pathname);
    if (page && page.lang !== l) navigate(PATHS[l][page.page] + hash, { replace: true, state: { keepScroll: true } });
  };
}

// Compact ES / EN switch for the header, styled like the appearance toggle.
export default function LanguageToggle() {
  const [lang] = useLang();
  const setLang = useSwitchLang();
  return (
    <div className="theme lang" role="group" aria-label={COMMON[lang].langGroup}>
      {LANGS.map(l => (
        <button key={l} type="button" lang={l} aria-pressed={String(lang === l)} aria-label={LABELS[l][1]} title={LABELS[l][1]} onClick={() => setLang(l)}>
          {LABELS[l][0]}
        </button>
      ))}
    </div>
  );
}

// "Español · English" text links for the footer.
export function LanguageLinks() {
  const [lang] = useLang();
  const setLang = useSwitchLang();
  return (
    <span className="lang-links" role="group" aria-label={COMMON[lang].langGroup}>
      <button type="button" lang="es" aria-pressed={String(lang === 'es')} onClick={() => setLang('es')}>Español</button>
      {' · '}
      <button type="button" lang="en" aria-pressed={String(lang === 'en')} onClick={() => setLang('en')}>English</button>
    </span>
  );
}
