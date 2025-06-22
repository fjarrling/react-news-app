import styles from './ErrorPage.module.scss'
import {NavLink} from "react-router";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <div className={`${styles.errorPageContainer} container`}>
        <div className={styles.errorPageInner}>
          <h1 className={styles.errorPageTitle}>
            🧐 Упс! Страница не найдена (404)
          </h1>
          <p className={styles.errorPageSubtitle}>
            Похоже, вы заблудились в новостях...<br/>
            Такой страницы не существует или она была удалена. 📰🧭
          </p>
          <NavLink to='/' className={styles.errorPageButton}>
            🔙 Вернуться на главную
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
