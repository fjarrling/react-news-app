import {useTheme} from "@/hooks/useTheme.ts";
import styles from "./ThemeSwitcher.module.scss";
import Moon from "@/assets/icons/moon.svg?react"
import Sun from "@/assets/icons/sun.svg?react"

const ThemeSwitcher = () => {
  const {theme, setTheme} = useTheme();
  return (
    <>
      <div className={`${styles.themeSwitcher} ${theme === 'dark' ? styles.themeSwitcherDark : ''}`}>
        <button
          className={`${styles.themeSwitcherButton} ${styles.themeSwitcherButtonSun} ${theme === "light" ? styles.themeSwitcherButtonActive : ""}`}
          type="button"
          onClick={() => setTheme("light")}
        >
          <Sun/>
        </button>
        <button
          className={`${styles.themeSwitcherButton} ${theme === "dark" ? styles.themeSwitcherButtonActive : ""}`}
          type="button"
          onClick={() => setTheme("dark")}
        >
          <Moon/>
        </button>
      </div>
    </>
  );
};
export default ThemeSwitcher;