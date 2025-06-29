import {NavLink, useLocation, useNavigate} from 'react-router'
import {useEffect} from "react";
import styles from "./NewsPage.module.scss"

const NewsPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {article} = location.state || {}
  useEffect(() => {
    if (!article) {
      navigate('/*', {replace: true})
    }
  }, [article, navigate])
  if (!article) return null
  return (
    <div className={styles.newsPage}>
      <div className={`${styles.newsPageContainer} container`}>
        <div className={styles.newsPageInner}>
          <h1 className={styles.newsPageTitle}>{article.title}</h1>
          <img className={styles.newsPageImage} src={article.urlToImage} alt={article.title}
               style={{maxWidth: '100%'}}/>
          <p className={styles.newsPageText}>{article.description}</p>
          <div className={styles.newsPageFooter}>
            <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
            <p>{article.author}</p>
          </div>
          <a className={styles.newsPageLink} href={article.url} target="_blank" rel="noopener noreferrer">
            Читать продолжение в источнике
          </a>
          <NavLink
            className={styles.newsPageBackButton}
            to={`/`}>
            Вернутся на главную
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
