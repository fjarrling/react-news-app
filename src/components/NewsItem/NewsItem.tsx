import styles from './NewsItem.module.scss'
import type {NewsItem as TNewsItem} from "@/types/types.ts"
import {NavLink} from "react-router";

type NewsItemProps = {
  item: TNewsItem,
  variant: "default" | "hot";
  index: number;
}

const NewsItem = ({item, variant, index}: NewsItemProps) => {
console.log(item)
  if (variant === "default") {
    return (
      <li className={styles.item}>
        <NavLink
          to={`/news/${index}`}
          state={{article: item}}
          className={styles.itemImage}
        >
          <img
            src={item.urlToImage}
            alt={item.title}
          />
        </NavLink>
        <div className={styles.itemBody}>
          <NavLink
            to={`/news/${index}`}
            state={{article: item}}
            className={styles.itemTitle}
          >
            <h2>{item.title}</h2>

          </NavLink>
          <div className={styles.itemFooter}>
            <p className={styles.itemDate}>{new Date(item.publishedAt).toLocaleDateString()}</p>
            <p className={styles.itemAutor}>{item.author}</p>
          </div>
        </div>
      </li>
    )
  }
  return (
    <li className={styles.itemHot}>
      <NavLink
        to={`/news/${index}`}
        state={{article: item}}
        className={styles.itemHotImage}
      >
        <img
          src={item.urlToImage}
          alt={item.title}
        />
      </NavLink>
      <div className={styles.itemHotBody}>
        <NavLink
          to={`/news/${index}`}
          state={{article: item}}
          className={styles.itemHotTitle}
        >
          <h2>{item.title}</h2>

        </NavLink>
        <div className={styles.itemHotFooter}>
          <p className={styles.itemHotDate}>{new Date(item.publishedAt).toLocaleDateString()}</p>
          <p className={styles.itemHotAuthor}>{item.author}</p>
        </div>
      </div>
    </li>
  )
}

export default NewsItem
