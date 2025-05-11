import {useCallback, useEffect, useState} from 'react';
import styles from './Home.module.scss';
import {getNews} from '@/API/api.js';
import Header from '@/components/Header/Header';
import NewsList from '@/components/NewsList/NewsList';
import Skeleton from '@/components/Skeleton/Skeleton';
import type {NewsItem} from '@/types/types.ts';
import Pagination from '@/components/Pagination/Pagination.tsx';
import {getTotalPagesCount} from '@/utils/utils.ts';
import {useFetching} from '@/hooks/useFetching.ts';
import {PAGE_SIZE, TOTAL_RESULTS} from '@/consts/consts.ts';

const Home = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchNewsCallback = useCallback(async (pageSize: number, currentPage: number) => {
    const response = await getNews(pageSize, currentPage);
    setNews(response.articles);
    setTotalPages(getTotalPagesCount(pageSize, TOTAL_RESULTS));
  }, []);

  const [fetchNews, isNewsLoading, newsError] = useFetching(fetchNewsCallback);

  useEffect(() => {
    fetchNews(PAGE_SIZE, currentPage);
  }, [fetchNews, currentPage]);


  return (
    <>
      <Header/>
      <div className="container">
        <h1 className={styles.title}>Агрегатор новостей</h1>

        {isNewsLoading ? <Skeleton count={9}/> : <NewsList news={news}/>}
        {newsError && <p>Произошла ошибка: {newsError.message}</p>}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Home;
