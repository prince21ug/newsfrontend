import axios from 'axios';

// Replace 'YOUR_API_KEY' with your actual NewsAPI key
const API_KEY = '9418626c6bc94675a8ca24614ecdca19';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchLatestHeadline = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country: 'us', // or any other country code
        apiKey: API_KEY,
      },
    });
    const articles = response.data.articles;
    if (articles.length > 0) {
      return articles; // Get the latest headline
    }
    return 'No headlines available';
  } catch (error) {
    console.error('Error fetching headlines:', error);
    return 'Failed to fetch headlines';
  }
};
