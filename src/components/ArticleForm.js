import React, { useState } from 'react';
import axios from 'axios';

const ArticleForm = ({ fetchArticles }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://newsmania-renuc3thw-ankit-kumars-projects-9f848079.vercel.app/articles', { title, content, author, summary });
      fetchArticles();
      setTitle('');
      setContent('');
      setAuthor('');
      setSummary('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Summary</label>
        <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      <button type="submit">Add Article</button>
    </form>
  );
};

export default ArticleForm;
