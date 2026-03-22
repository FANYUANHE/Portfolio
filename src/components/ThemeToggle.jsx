import { Sun, Moon } from 'lucide-react';
import { THEME_KEY } from '../utils/theme';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
  };

  return (
    <button
      type="button"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="theme-toggle magnetic-btn relative"
      onClick={toggle}
    >
      {theme === 'light' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
