import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Privacidad from './pages/Privacidad';
import Terminos from './pages/Terminos';

// Scrolls to #hash targets after route changes (e.g. "/#preguntas" from a legal page), otherwise to the top.
// Language switches between /privacidad and /privacy keep the scroll position.
function ScrollManager() {
  const { pathname, hash, state } = useLocation();
  useEffect(() => {
    if (state?.keepScroll) return;
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacidad lang="es" />} />
        <Route path="/terminos" element={<Terminos lang="es" />} />
        <Route path="/privacy" element={<Privacidad lang="en" />} />
        <Route path="/terms" element={<Terminos lang="en" />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/privacidad.html" element={<Navigate to="/privacidad" replace />} />
        <Route path="/terminos.html" element={<Navigate to="/terminos" replace />} />
        <Route path="/privacy.html" element={<Navigate to="/privacy" replace />} />
        <Route path="/terms.html" element={<Navigate to="/terms" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
