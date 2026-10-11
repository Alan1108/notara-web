import { useEffect, useState } from 'react';

// Appearance: Claro / Oscuro / Sistema (Sistema follows the device). Shared across pages via localStorage.
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('notara-theme') || 'system'; } catch (e) { return 'system'; }
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', theme);
    try { localStorage.setItem('notara-theme', theme); } catch (e) {}
  }, [theme]);
  return [theme, setTheme];
}
