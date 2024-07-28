import React, { useEffect, useState } from 'react';
import { fetchLatestHeadline } from '../services/newsService';
import './Home.css';

const Home = () => {
  const [headline, setHeadline] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHeadline = async () => {
      try {
        // Fetch the latest headline
        const latestHeadline = await fetchLatestHeadline();
        setHeadline(latestHeadline);
      } catch (error) {
        setError('Failed to fetch headlines');
      } finally {
        setLoading(false);
      }
    };

    getHeadline();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="home">
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="welcome-section">
        <h1>Welcome to NewsMania!</h1>
        <p>Your one-stop destination for the latest news headlines.</p>
      
      </div>
      <div className="headline-section">
        <h2>Latest Headline</h2>
      
       
        <p> <span>1.  </span>
        <span>{headline[0].title}</span>
          </p>
          <p> <span>2.  </span>
        <span>{headline[2].title}</span>
          </p>
          <p> <span>3.  </span>
        <span>{headline[3].title}</span>
          </p>
          <p> <span>4.  </span>
        <span>{headline[4].title}</span>
          </p>
          <p> <span>5.  </span>
        <span>{headline[5].title}</span>
          </p>
          <p> <span>6.  </span>
        <span>{headline[6].title}</span>
          </p>
          <p> <span>7.  </span>
        <span>{headline[7].title}</span>
          </p>
          <p> <span>8.  </span>
        <span>{headline[8].title}</span>
          </p>
          <p> <span>9.  </span>
        <span>{headline[9].title}</span>
          </p>
          <p> <span>10.  </span>
        <span>{headline[10].title}</span>
          </p>
          
      </div>
    </div>
  );
};

export default Home;
