import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ fetchNotes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://newsmania-renuc3thw-ankit-kumars-projects-9f848079.vercel.app/notes', { title, content });
      fetchNotes();
      setTitle('');
      setContent('');
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
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
