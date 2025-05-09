import styles from './NewsList.module.scss'
import NewsItem from "@/components/NewsItem/NewsItem.js";
import type {NewsItem as TNewsItem} from "@/types/types.ts";


type NewsListProps = {
  news: TNewsItem[]
}

const NewsList = ({news}: NewsListProps) => {

  return (
    <ul className={styles.list}>
      {news.map((item, index) => {
        return <NewsItem key={index} item={item}/>
      })}
    </ul>
  )
}

export default NewsList
