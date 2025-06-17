import React, {useCallback, useState} from 'react';
import styles from './Home.module.scss';
import {PAGE_SIZE, TOTAL_RESULTS_MAX} from '@/consts/consts.ts';
import {getHotNews, getNews} from '@/API/api.js';
import NewsList from '@/components/NewsList/NewsList';
import Pagination from '@/components/Pagination/Pagination.tsx';
import Skeleton from '@/components/Skeleton/Skeleton';
import Input from "@/components/UI/Input/input.tsx";
import type {NewsItem} from '@/types/types.ts';
import {useAsync} from '@/hooks/useAsync.ts';
import {useDebounceValue} from "@/hooks/useDebounceValue.ts";
import {getTotalPagesCount} from "@/utils/utils.ts";
import Header from "@/components/Header/Header.tsx";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);
  const debouncedSearchQuery = useDebounceValue(searchQuery, 1200)

  const fetchNews = useCallback(async () => {
    const response = await getNews(PAGE_SIZE, currentPage, debouncedSearchQuery);
    setTotalPages(getTotalPagesCount(PAGE_SIZE, TOTAL_RESULTS_MAX < response.totalResults ? TOTAL_RESULTS_MAX : response.totalResults));
    return response;
  }, [debouncedSearchQuery, currentPage]);


  const fetchHotNews = useCallback(async () => {
    return await getHotNews(PAGE_SIZE, currentPage);
  }, []);


  const {
    data: news,
    isLoading: isNewsLoading,
    isError: isNewsError,
    error: newsError
  } = useAsync<{ articles: NewsItem[] }>(fetchNews, [fetchNews]);

  const {
    data: hotNews,
    isLoading: isHotNewsLoading,
    isError: isHotNewsError,
    error: hotNewsError
  } = useAsync<{ articles: NewsItem[] }>(fetchHotNews, [fetchHotNews]);

  return (
    <>
      <Header/>
      <div className="container">
        <div className={styles.body}>
          <div>
            <h2 className={styles.title}>Hot News</h2>
            {isHotNewsLoading ? <Skeleton variant="hot" count={PAGE_SIZE}/> :
              <NewsList variant="hot" news={hotNews.articles}/>}
            {isHotNewsError && <p>Произошла ошибка: {hotNewsError.message}</p>}
          </div>
          <div>
            <Input type='text'
                   placeholder='Поиск...'
                   value={searchQuery}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              changePage={setCurrentPage}
            />
            {isNewsLoading ? <Skeleton variant="default" count={PAGE_SIZE}/> :
              <NewsList variant="default" news={news.articles}/>}
            {isNewsError && <p>Произошла ошибка: {newsError.message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
