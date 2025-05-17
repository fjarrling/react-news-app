import React, {useCallback, useEffect, useState} from 'react';
import styles from './Home.module.scss';
import {getNews} from '@/API/api.js';
import NewsList from '@/components/NewsList/NewsList';
import Skeleton from '@/components/Skeleton/Skeleton';
import type {NewsItem} from '@/types/types.ts';
import Pagination from '@/components/Pagination/Pagination.tsx';
import {useFetching} from '@/hooks/useFetching.ts';
import {PAGE_SIZE, TOTAL_PAGES} from '@/consts/consts.ts';
import Input from "@/components/UI/Input/input.tsx";
import {useDebounceValue} from "@/hooks/useDebounceValue.ts";

const Home = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounceValue(searchQuery, 1200)

  const fetchNewsCallback = useCallback(async (pageSize: number, currentPage: number, searchQuery: string) => {
    const response = await getNews(pageSize, currentPage, searchQuery);
    setNews(response.articles);
  }, []);

  const [fetchNews, isNewsLoading, newsError] = useFetching(fetchNewsCallback);

  useEffect(() => {
    fetchNews(PAGE_SIZE, currentPage, debouncedSearchQuery);
  }, [fetchNews, currentPage, debouncedSearchQuery]);

  return (
    <>
      {/*<Header/>*/}
      <div className="container">
        <h1 className={styles.title}>Агрегатор новостей</h1>
        <Input type='text'
               placeholder='Поиск...'
               value={searchQuery}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}

        />
        {isNewsLoading ? <Skeleton count={9}/> : <NewsList news={news}/>}
        {newsError && <p>Произошла ошибка: {newsError.message}</p>}
        <Pagination
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          changePage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Home;
