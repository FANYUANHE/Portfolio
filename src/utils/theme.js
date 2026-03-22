export const THEME_KEY = 'portfolio-theme';
export const LANG_KEY = 'portfolio-lang';

export const getInitialLang = () => {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === 'en' || stored === 'zh') return stored;
  return 'en';
};

export const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
};
