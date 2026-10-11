import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import css from '../styles/legal.css?inline';
import Sprite from './Sprite';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTitle } from '../hooks/useTitle';
import { useLang } from '../i18n/LanguageContext';
import { COMMON } from '../i18n/common';
import { PATHS } from '../i18n/routes';

const PH = ({ children }) => <span className="ph">{children}</span>;
export { PH };

// Shared shell for the legal pages: nav, header band, table of contents and footer.
// `lang` comes from the address (/privacidad vs /privacy) and becomes the site language.
export default function LegalLayout({ lang, title, toc, current, children }) {
  const [siteLang, setSiteLang] = useLang();
  useLayoutEffect(() => {
    if (siteLang !== lang) setSiteLang(lang);
  }, [lang, siteLang, setSiteLang]);
  const common = COMMON[lang];
  const paths = PATHS[lang];
  const l = common.legal;
  useTitle(`${title} · Notara`);
  return (
    <>
      <style>{css}</style>
      <Sprite />
      <header className="nav"><div className="wrap">
        <Link className="brand" to="/"><svg aria-hidden="true"><use href="#wave-n" stroke="url(#brandG)" /></svg>Notara</Link>
        <div className="nav-end">
          <Link className="back" to="/">{l.back}</Link>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div></header>
      <main>
        <div className="head"><div className="wrap">
          <span className="eyebrow">{l.eyebrow}</span>
          <h1>{title}</h1>
          <p className="updated">{l.effective} {l.effectiveDate} · {l.updated}</p>
          <span className="draft">{l.draft}</span>
        </div></div>
        <div className="wrap body">
          <nav className="toc" aria-label={l.toc}><b>{l.toc}</b>{toc.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
          <article>{children}</article>
        </div>
      </main>
      <footer><div className="wrap">
        <Link className="brand" to="/" style={{ fontSize: 17 }}><svg aria-hidden="true" style={{ width: 24, height: 24 }}><use href="#wave-n" stroke="url(#brandG)" /></svg>Notara</Link>
        <nav aria-label={common.footerAria}>
          <Link to={paths.terms} aria-current={current === 'terms' ? 'page' : undefined}>{common.terms}</Link>
          <Link to={paths.privacy} aria-current={current === 'privacy' ? 'page' : undefined}>{common.privacy}</Link>
          <Link to="/#preguntas">{common.help}</Link>
        </nav>
        <span>© 2026 Notara</span>
      </div></footer>
    </>
  );
}
