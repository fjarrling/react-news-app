import {useTheme} from "@/hooks/useTheme.ts";
import styles from "./ThemeSwitcher.module.scss";
const ThemeSwitcher = () => {
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className={styles.themeSwitcher}  onClick={toggleTheme}>
      Переключить на {theme === "light" ? "тёмную" : "светлую"} тему
    </button>
  );
};
export default ThemeSwitcher;