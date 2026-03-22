import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getInitialTheme, getInitialLang } from './utils/theme';
import profileDataEn from './data/profileEn';
import profileDataZh from './data/profileZh';
import LiquidBackground from './components/LiquidBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [lang, setLang] = useState(getInitialLang);
  const data = lang === 'zh' ? profileDataZh : profileDataEn;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <LiquidBackground />
      <div className="noise-overlay" />
      <Navigation theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <main>
        <Hero data={data} lang={lang} />
        <About data={data} lang={lang} />
        <Experience data={data} lang={lang} />
        <Projects data={data} lang={lang} />
        <Skills data={data} theme={theme} lang={lang} />
        <Footer data={data} lang={lang} />
      </main>
    </>
  );
}

export default App;
