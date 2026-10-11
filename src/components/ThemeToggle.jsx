import { useTheme } from '../hooks/useTheme';
import { useLang } from '../i18n/LanguageContext';
import { COMMON } from '../i18n/common';

const OPTIONS = [
  ['light', '#i-sun'],
  ['dark', '#i-moon'],
  ['system', '#i-auto'],
];

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const [lang] = useLang();
  const labels = COMMON[lang].theme;
  return (
    <div className="theme" role="group" aria-label={labels.group}>
      {OPTIONS.map(([opt, icon]) => (
        <button key={opt} type="button" data-theme-opt={opt} aria-pressed={String(theme === opt)} aria-label={labels[opt]} title={labels[opt]} onClick={() => setTheme(opt)}>
          <svg aria-hidden="true"><use href={icon} /></svg>
        </button>
      ))}
    </div>
  );
}
