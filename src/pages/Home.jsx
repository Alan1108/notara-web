import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import css from '../styles/home.css?inline';
import Sprite from '../components/Sprite';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle, { LanguageLinks } from '../components/LanguageToggle';
import { useTitle } from '../hooks/useTitle';
import { useLang } from '../i18n/LanguageContext';
import { COMMON } from '../i18n/common';
import { HOME } from '../i18n/home';
import { PATHS } from '../i18n/routes';

const MODE_ICONS = { clase: '#i-cap', reunion: '#i-people', personal: '#i-leaf' };
const TODAY_ICONS = {
  clase: ['#i-cards', '#i-doc', '#i-redo'],
  reunion: ['#i-doc', '#i-people', '#i-redo'],
  personal: ['#i-redo', '#i-doc', '#i-leaf'],
};
const MODE_KEYS = ['clase', 'reunion', 'personal'];

const WAVE_BARS = Array.from({ length: 14 }, (_, i) => i);

function Icon({ href, ...rest }) {
  return <svg aria-hidden="true" {...rest}><use href={href} /></svg>;
}

export default function Home() {
  const [lang] = useLang();
  const t = HOME[lang];
  const common = COMMON[lang];
  useTitle('Notara');
  useEffect(() => {
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
  }, [t]);

  const [mode, setMode] = useState('clase');
  const [recording, setRecording] = useState(false);
  const [lines, setLines] = useState([]);
  const [starFlash, setStarFlash] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [bill, setBill] = useState('year');

  const heroRef = useRef(null);
  const screenRef = useRef(null);
  const clockRef = useRef(null);
  const waveRef = useRef(null);
  const liveRef = useRef(null);
  const starredRef = useRef(false);
  const lineIdRef = useRef(0);

  // The demo transcript follows the current mode and language without restarting the recording.
  liveRef.current = t.modes[mode].live;

  function selectMode(m) {
    setMode(m);
    setRecording(false);
  }

  // Recording demo: the gradient breathes with a simulated voice level
  useEffect(() => {
    if (!recording) return;
    const screen = screenRef.current, hero = heroRef.current, clock = clockRef.current;
    const bars = waveRef.current.querySelectorAll('b');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t0 = performance.now();
    let raf = 0, last = 0, lineIdx = 0;

    function frame(now) {
      const s = Math.floor((now - t0) / 1000);
      clock.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
      if (now - last > 100) {
        last = now;
        const amp = 0.35 + 0.65 * Math.abs(Math.sin(now / 340) * Math.sin(now / 970 + 1));
        if (!reduce) {
          const stop = (55 - amp * 15).toFixed(1) + '%';
          screen.style.setProperty('--stop', stop);
          hero.style.setProperty('--stop', stop);
        }
        bars.forEach((b, i) => {
          b.style.height = (18 + Math.abs(Math.sin(now / 160 + i * 0.9)) * amp * 82).toFixed(0) + '%';
        });
      }
      raf = requestAnimationFrame(frame);
    }
    function addLine() {
      const all = liveRef.current;
      let text = all[lineIdx % all.length];
      const star = starredRef.current;
      if (star) { text = '⭐ ' + text; starredRef.current = false; }
      const line = { id: ++lineIdRef.current, text, star };
      setLines(prev => [...prev, line].slice(-3));
      lineIdx++;
    }

    setLines([]);
    raf = requestAnimationFrame(frame);
    addLine();
    const lineTimer = setInterval(addLine, 2200);
    return () => {
      cancelAnimationFrame(raf); clearInterval(lineTimer);
      screen.style.removeProperty('--stop'); hero.style.removeProperty('--stop');
      clock.textContent = '00:00';
    };
  }, [recording]);

  function markStar() {
    starredRef.current = true;
    setStarFlash(true);
    setTimeout(() => setStarFlash(false), 250);
  }

  const d = t.modes[mode];
  const [pAmt, pPer, pFine, pCta] = t.pricing.pro.prices[bill];

  return (
    <>
      <style>{css}</style>
      <Sprite />

      <header className="nav" data-mode={mode} id="nav">
        <div className="wrap">
          <a className="brand" href="#top" aria-label={t.nav.home}>
            <svg aria-hidden="true"><use href="#wave-n" stroke="url(#brandG)" /></svg>Notara
          </a>
          <nav className="nav-links" aria-label={t.nav.sections}>
            {t.nav.links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <div className="nav-end">
            <LanguageToggle />
            <ThemeToggle />
            <a className="btn btn-primary" href="#descargar">{t.nav.download}</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero" data-mode={mode} id="hero" ref={heroRef}>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="chip-note"><b>{t.hero.chipNew}</b> {t.hero.chip}</span>
              <h1>{t.hero.title}</h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#descargar"><Icon href="#i-apple" />{t.hero.appStore}</a>
                <a className="btn btn-ghost" href="#descargar"><Icon href="#i-play" />{t.hero.googlePlay}</a>
              </div>
              <div className="mode-pick">
                <small>{t.hero.pick}</small>
                <div className="modes" role="group" aria-label={t.hero.modesAria}>
                  {MODE_KEYS.map(m => (
                    <button key={m} className="mode-btn" data-m={m} aria-pressed={String(mode === m)} onClick={() => selectMode(m)}>
                      <Icon href={MODE_ICONS[m]} />{t.modes[m].name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="phone-stage">
              <div className="phone" aria-label={t.phone.aria}>
                <div className={'screen' + (recording ? ' recording' : '')} id="screen" ref={screenRef}>
                  <div className="island" aria-hidden="true"><i></i><span className="mini-wave"><b></b><b></b><b></b><b></b></span></div>
                  <div className="status" aria-hidden="true"><span>9:41</span><span>●●● 100%</span></div>
                  <div className="topbar">
                    <span className="circ"><Icon href="#i-menu" /></span>
                    <span className="name">Notara</span>
                    <span className="right"><span className="circ"><Icon href="#i-chat" /></span><span className="circ avatar">A</span></span>
                  </div>
                  <div className="home">
                    <svg className="sym" aria-hidden="true"><use href="#wave-n" stroke="currentColor" /></svg>
                    <p className="greet" id="greet">{d.greet}</p>
                  </div>
                  <div className="live" id="live" aria-live="polite">
                    {lines.map(l => <p key={l.id} className={l.star ? 'star' : undefined}>{l.text}</p>)}
                  </div>
                  <div className="today-wrap">
                    <div className="today-label">{t.phone.today}</div>
                    <ul className="today" id="today">
                      {d.today.map((text, i) => <li key={i}><Icon href={TODAY_ICONS[mode][i]} />{text}</li>)}
                    </ul>
                  </div>
                  <div className="pill">
                    <button className="rec-btn" id="rec" aria-label={recording ? t.phone.stop : t.phone.start} onClick={() => setRecording(r => !r)}></button>
                    <span className="hint">{t.phone.hint}</span>
                    <span className="timer"><strong id="clock" ref={clockRef}>00:00</strong><span>{t.phone.onPhone}</span></span>
                    <span className="wave" id="wave" aria-hidden="true" ref={waveRef}>{WAVE_BARS.map(i => <b key={i}></b>)}</span>
                    <button className={'star-btn' + (starFlash ? ' flash' : '')} id="star" aria-label={t.phone.star} onClick={markStar}>⭐</button>
                    <span className="mode-chip" id="chip"><Icon href={MODE_ICONS[mode]} /><span>{d.name}</span> ▾</span>
                  </div>
                  <div className="home-bar" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MODES */}
        <section className="sec" id="modos">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{t.modeSection.eyebrow}</span>
              <h2 className="h2">{t.modeSection.title}</h2>
              <p className="lead">{t.modeSection.lead}</p>
            </div>
            <div className="mode-grid">
              {MODE_KEYS.map(m => {
                const c = t.modeSection.cards[m];
                return (
                  <article key={m} className="mode-card" data-mode={m}>
                    <span className="ic"><Icon href={MODE_ICONS[m]} /></span>
                    <h3>{t.modes[m].name}</h3>
                    <p>{c.text}</p>
                    <div className="tabs">{c.tabs.map(tab => <span key={tab}>{tab}</span>)}</div>
                    <div className="note">
                      <div className="meta"><span>{c.meta}</span><span>{{ clase: '48:12', reunion: '32:05', personal: '04:51' }[m]}</span></div>
                      <div className="t">{c.title}</div>
                      <ul className={m === 'reunion' ? 'check' : undefined}>
                        {c.items.map(item => <li key={item}>{item.startsWith('⭐') ? <span className="mark">{item}</span> : item}</li>)}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* DAILY CYCLE */}
        <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="ciclo">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="h2" id="ciclo">{t.cycle.title}</h2>
            </div>
            <div className="cycle">
              {t.cycle.steps.map(([title, text], i) => (
                <div key={i} className="step"><span className="n">{i + 1}</span><h3>{title}</h3><p>{text}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* STUDY */}
        <section className="sec" id="estudiar" data-mode="clase" style={{ paddingTop: 0 }}>
          <div className="wrap split">
            <div className="copy">
              <span className="eyebrow">{t.study.eyebrow}</span>
              <h2 className="h2">{t.study.title}</h2>
              <p className="lead">{t.study.lead}</p>
              <ul className="ticks">
                {t.study.ticks.map((tick, i) => <li key={i}><span>{tick}</span></li>)}
              </ul>
            </div>
            <div className="demo">
              <div className="demo-meta"><span>{t.study.meta}</span><span>{t.study.count}</span></div>
              <div className="progress"><i></i></div>
              <button className="card3d" id="flash" aria-pressed={String(flipped)} aria-label={t.study.cardAria} onClick={() => setFlipped(f => !f)}>
                <div className="card-in">
                  <div className="face">
                    <span className="k">{t.study.question}</span>
                    <p className="q">{t.study.q}</p>
                    <small>{t.study.reveal}</small>
                  </div>
                  <div className="face back">
                    <span className="k">{t.study.answer}</span>
                    <p className="a">{t.study.a}</p>
                    <span className="listen">{t.study.listen}</span>
                  </div>
                </div>
              </button>
              <div className="card-actions">
                <button className="again" type="button" onClick={() => setFlipped(false)}>{t.study.again}</button>
                <button className="knew" type="button" onClick={() => setFlipped(false)}>{t.study.knew}</button>
              </div>
              <div className="streak">{t.study.streak}</div>
            </div>
          </div>
        </section>

        {/* CHAT */}
        <section className="sec" data-mode="reunion" style={{ paddingTop: 0 }}>
          <div className="wrap split rev">
            <div className="demo">
              <div className="bubble me">{t.chat.me}</div>
              <div className="bubble ai">
                <span>{t.chat.ai}</span>
                <div className="sources">
                  {t.chat.sources.map(src => <span key={src} className="src" style={{ '--m': 'var(--reunion)' }}><i></i>{src}</span>)}
                </div>
              </div>
              <div className="ask"><span>{t.chat.ask}</span><b><Icon href="#i-mic" /></b></div>
            </div>
            <div className="copy">
              <span className="eyebrow">{t.chat.eyebrow}</span>
              <h2 className="h2">{t.chat.title}</h2>
              <p className="lead">{t.chat.lead}</p>
              <ul className="ticks">
                {t.chat.ticks.map((tick, i) => <li key={i}><span>{tick}</span></li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* PRIVACY */}
        <section className="sec privacy-band" id="privacidad" data-mode="personal">
          <div className="wrap">
            <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{t.privacy.eyebrow}</span>
            <h2 className="priv-big" style={{ marginTop: 14 }}>{t.privacy.title}</h2>
            <div className="priv-grid">
              {t.privacy.cards.map(([badge, title, text]) => (
                <div key={badge} className="priv">
                  <span className="badge">{badge}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 28, color: 'var(--text-2)' }}>{t.privacy.more}</p>
          </div>
        </section>

        {/* PERSONALITY */}
        <section className="sec" aria-label={t.voice.aria}>
          <div className="wrap voice">
            <q>{t.voice.quote}</q>
            <div className="traits">
              {t.voice.traits.map(([title, text]) => <div key={title}><b>{title}</b><span>{text}</span></div>)}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="sec pricing" id="precios" data-mode={mode}>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{t.pricing.eyebrow}</span>
              <h2 className="h2">{t.pricing.title}</h2>
              <p className="lead">{t.pricing.lead}</p>
            </div>
            <div className="bill" role="group" aria-label={t.pricing.billAria}>
              <button type="button" data-bill="year" aria-pressed={String(bill === 'year')} onClick={() => setBill('year')}>{t.pricing.year} <em>{t.pricing.save}</em></button>
              <button type="button" data-bill="month" aria-pressed={String(bill === 'month')} onClick={() => setBill('month')}>{t.pricing.month}</button>
            </div>
            <div className="plans">
              <article className="plan">
                <div className="plan-head"><h3>{t.pricing.free.name}</h3></div>
                <div className="price"><strong>$0</strong><span>{t.pricing.free.per}</span></div>
                <p className="fine">{t.pricing.free.fine}</p>
                <ul className="ticks">
                  {t.pricing.free.ticks.map((tick, i) => <li key={i}><span>{tick}</span></li>)}
                </ul>
                <a className="btn btn-ghost" href="#descargar">{t.pricing.free.cta}</a>
              </article>
              <article className="plan pro">
                <div className="plan-head"><h3>{t.pricing.pro.name}</h3><span className="pro-chip">Pro</span></div>
                <div className="price"><strong id="pAmt">{pAmt}</strong><span id="pPer">{pPer}</span></div>
                <p className="fine" id="pFine">{pFine}</p>
                <ul className="ticks">
                  {t.pricing.pro.ticks.map((tick, i) => <li key={i}><span>{tick}</span></li>)}
                </ul>
                <a className="btn btn-primary" href="#descargar" id="pCta">{pCta}</a>
              </article>
            </div>
            <p className="student">{t.pricing.student}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="preguntas">
          <div className="wrap faq">
            <div className="sec-head" style={{ margin: 0 }}>
              <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{t.faq.eyebrow}</span>
              <h2 className="h2">{t.faq.title}</h2>
            </div>
            <div>
              {t.faq.items.map(([q, a], i) => (
                <details key={i} open={i === 0 ? true : undefined}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="sec final" id="descargar" data-mode={mode}>
          <div className="wrap">
            <svg className="big" aria-hidden="true"><use href="#wave-n" stroke="url(#brandG)" /></svg>
            <h2>{t.final.title}</h2>
            <div className="cta-row">
              <a className="btn btn-primary" href="#top"><Icon href="#i-apple" />{t.hero.appStore}</a>
              <a className="btn btn-ghost" href="#top"><Icon href="#i-play" />{t.hero.googlePlay}</a>
            </div>
            <small>{t.final.small}</small>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <a className="brand" href="#top" style={{ fontSize: 17 }}><svg aria-hidden="true" style={{ width: 24, height: 24 }}><use href="#wave-n" stroke="url(#brandG)" /></svg>Notara</a>
          <nav aria-label={common.footerAria}>
            <a href="#precios">{t.footer.pricing}</a>
            <a href="#preguntas">{common.help}</a>
            <Link to={PATHS[lang].terms}>{common.terms}</Link>
            <Link to={PATHS[lang].privacy}>{common.privacy}</Link>
            <LanguageLinks />
          </nav>
          <span>© 2026 Notara</span>
        </div>
      </footer>
    </>
  );
}
