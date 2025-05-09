import styles from './NewsItem.module.scss'
import type {NewsItem as TNewsItem} from "@/types/types.ts"

type NewsItemProps = {
  item: TNewsItem
}

const NewsItem = ({item}: NewsItemProps) => {
  return (
    <li className={styles.item}>
      <img
        className={styles.itemImage}
        src={item.urlToImage}
        alt={item.title}
      />
      <div className={styles.itemBody}>
        <h2 className={styles.itemTitle}>{item.title}</h2>
        <p className={styles.itemText}>{item.description}</p>
        <a
          className={styles.itemButton}
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Читать полностью
        </a>
        <div className={styles.itemFooter}>
          <p>{new Date(item.publishedAt).toLocaleDateString()}</p>
          <p>{item.author}</p>
        </div>
      </div>
    </li>
  )
}

export default NewsItem
