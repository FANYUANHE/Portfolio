import { LANG_KEY } from '../utils/theme';

const LangToggle = ({ lang, setLang }) => {
  const toggle = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    localStorage.setItem(LANG_KEY, next);
  };

  return (
    <button type="button" aria-label="Switch language" className="lang-toggle" onClick={toggle}>
      <span className={lang === 'en' ? 'lang-toggle-active' : ''}>EN</span>
      <span className="lang-toggle-sep">/</span>
      <span className={lang === 'zh' ? 'lang-toggle-active' : ''}>中</span>
    </button>
  );
};

export default LangToggle;
