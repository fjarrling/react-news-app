import styles from './NewsItem.module.scss'
import type {NewsItem as TNewsItem} from "@/types/types.ts"

type NewsItemProps = {
  item: TNewsItem,
  variant: "default" | "hot";

}

const NewsItem = ({item, variant}: NewsItemProps) => {

  if (variant === "default") {
    return (
      <li className={styles.item}>
        <a href={item.url}
           target='_blank'
           className={styles.itemImage}
           rel="noopener noreferrer"
        >
          <img
            src={item.urlToImage}
            alt={item.title}
          />
        </a>
        <div className={styles.itemBody}>
          <a className={styles.itemTitle} href="" target="_blank" rel="noopener noreferrer">
            <h2 >{item.title}</h2>
          </a>
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
      <a className={styles.itemHotImage}
         href={item.url}
         target='_blank'
      >
        <img
          src={item.urlToImage}
          alt={item.title}
        />
      </a>
      <div className={styles.itemHotBody}>
        <a className={styles.itemHotTitle} href={item.url} target='_blank'>
          <h2>{item.title}</h2>
        </a>
        <div className={styles.itemHotFooter}>
          <p className={styles.itemHotDate}>{new Date(item.publishedAt).toLocaleDateString()}</p>
          <p className={styles.itemHotAuthor}>{item.author}</p>
        </div>
      </div>
    </li>
  )
}

export default NewsItem
