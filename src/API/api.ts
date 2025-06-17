import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_URL = import.meta.env.VITE_NEWS_API_URL;

export const getNews = async (pageSize = 10, page = 1, searchQuery = '') => {
  try {
    const response = await axios.get(`${API_URL}everything`, {
      params: {
        apiKey: API_KEY,
        domains: 'foxnews.com',
        q: searchQuery,
        pageSize: pageSize,
        page: page,
        sortBy: "publishedAt"
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching news:', error)
    throw error;
  }
};

export const getHotNews = async (pageSize = 10, page = 1) => {
  try {
    const response = await axios.get(`${API_URL}top-headlines`, {
      params: {
        apiKey: API_KEY,
        country: 'us',
        // category: 'business'
        // q: searchQuery,
        pageSize: pageSize,
        page: page,
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};