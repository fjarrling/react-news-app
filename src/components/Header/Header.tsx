import styles from './Header.module.scss'
import {formatDate} from "@/utils/utils.ts";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.tsx";

const Header = () => {
  const date = formatDate(new Date())

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContianer} container`}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <h1 className={styles.headerTitle}>
              React News by Fjarr 📰
            </h1>
            <div className={styles.headerDate}>
              {date}
            </div>
          </div>
          <ThemeSwitcher/>
        </div>
      </div>
    </header>
  );
};

export default Header;