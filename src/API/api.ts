import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_URL = import.meta.env.VITE_NEWS_API_URL;

export const getNews = async (pageSize = 9, page = 1) => {
  try {
    const response = await axios.get(`${API_URL}everything`, {
      params: {
        apiKey: API_KEY,
        language: 'ru',
        q: 'JavaScript',
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
