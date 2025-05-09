import {useEffect, useState} from 'react'
import styles from './Home.module.scss'
import {getNews} from '@/API/api.js'
import Header from '@/components/Header/Header'
import NewsList from '@/components/NewsList/NewsList'
import Skeleton from '@/components/Skeleton/Skeleton'
import type {NewsItem} from "@/types/types.ts";

const Home = () => {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const response = await getNews()
        setNews(response.articles)
        setLoading(false)
      } catch (error) {
        console.error('Error response:', error.response.data)
      }
    }
    fetchNews()
  }, [])
  return (
    <>
      <Header/>
      <div className='container'>
        <h1 className={styles.title}>Агрегатор новостей</h1>
        {loading ? <Skeleton count={10}/> : <NewsList news={news}/>}
      </div>
    </>
  )
}

export default Home
