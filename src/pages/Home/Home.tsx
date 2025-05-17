import React, {useCallback, useState} from 'react';
import styles from './Home.module.scss';
import {PAGE_SIZE, TOTAL_PAGES} from '@/consts/consts.ts';
import {getNews} from '@/API/api.js';
import NewsList from '@/components/NewsList/NewsList';
import Pagination from '@/components/Pagination/Pagination.tsx';
import Skeleton from '@/components/Skeleton/Skeleton';
import Input from "@/components/UI/Input/input.tsx";
import type {NewsItem} from '@/types/types.ts';
import {useAsync} from '@/hooks/useAsync.ts';
import {useDebounceValue} from "@/hooks/useDebounceValue.ts";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounceValue(searchQuery, 1200)

  const fetchNews = useCallback(() => {
    return getNews(PAGE_SIZE, currentPage, debouncedSearchQuery)
  }, [debouncedSearchQuery, currentPage])


  const {
    data: news,
    isLoading: isNewsLoading,
    isError: isNewsError,
    error: newsError
  } = useAsync<{ articles: NewsItem[] }>(fetchNews, [fetchNews]);

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
        {isNewsLoading ? <Skeleton count={9}/> : <NewsList news={news.articles}/>}
        {isNewsError && <p>Произошла ошибка: {newsError.message}</p>}
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
