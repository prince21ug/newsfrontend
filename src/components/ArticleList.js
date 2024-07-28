import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsmania-renuc3thw-ankit-kumars-projects-9f848079.vercel.app/articles');
        setArticles(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <Link to={`/article/${article._id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
