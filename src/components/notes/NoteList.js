import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from './NoteForm';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('https://newsmania-renuc3thw-ankit-kumars-projects-9f848079.vercel.app/notes');
      setNotes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm fetchNotes={fetchNotes} />
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
