import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://newsmania-renuc3thw-ankit-kumars-projects-9f848079.vercel.app/${id}`);
        setArticle(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchArticle();
  }, [id]);

  const deleteArticle = async () => {
    try {
      await axios.delete(`https://newsmania-renuc3thw-ankit-kumars-projects-9f848079.vercel.app/${id}`);
      navigate('/articles');
    } catch (err) {
      console.error(err);
    }
  };

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Summary:</strong> {article.summary}</p>
      <p>{article.content}</p>
      <button onClick={deleteArticle}>Delete</button>
    </div>
  );
};

export default Article;
