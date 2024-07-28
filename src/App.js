import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Article from './components/Article';
import ArticleList from './components/ArticleList';
import ArticleForm from './components/ArticleForm';
import NoteList from './components/notes/NoteList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/create-article" element={<ArticleForm />} />
            <Route path="/notes" element={<NoteList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
