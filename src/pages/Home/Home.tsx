import {useEffect, useState} from 'react'
import styles from './Home.module.scss'
import {getNews} from '@/API/api.js'
import Header from '@/components/Header/Header'
import NewsList from '@/components/NewsList/NewsList'
import Skeleton from '@/components/Skeleton/Skeleton'
import type {NewsItem} from "@/types/types.ts";
import Pagination from "@/components/Pagination/Pagination.tsx";
import {getTotalPagesCount} from "@/utils/utils.ts";

const Home = () => {
  const totalResults = 99

  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  const [pageSize, setPageSize] = useState(9)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState(getTotalPagesCount(pageSize, totalResults))

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const response = await getNews(pageSize, currentPage)
        setNews(response.articles)
        setLoading(false)
      } catch (error) {
        console.error('Error response:', error.response.data)
      }
    }
    fetchNews()
  }, [currentPage])

  return (
    <>
      <Header/>
      <div className='container'>
        <h1 className={styles.title}>Агрегатор новостей</h1>

        {loading ? <Skeleton count={9}/> : <NewsList news={news}/>}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default Home
