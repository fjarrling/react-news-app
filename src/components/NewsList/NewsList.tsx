import styles from './NewsList.module.scss'
import NewsItem from "@/components/NewsItem/NewsItem.js";
import type {NewsItem as TNewsItem} from "@/types/types.ts";


type NewsListProps = {
  news: TNewsItem[],
  variant: "default" | "hot";
}

const NewsList = ({news, variant}: NewsListProps) => {

  return (
    <ul
      className={variant === "default" ? styles.list : styles.listHot}
    >
      {news.map((item, index) => {
        return <NewsItem key={index} index={index} item={item} variant={variant} />
      })}
    </ul>
  )
}

export default NewsList
