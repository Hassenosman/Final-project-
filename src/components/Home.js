import React from 'react';
import Movies from './Movies';
import MovieSearch from './MovieSearch';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <MovieSearch />
      <button className="about-btn">
        <Link to="about">About</Link>
      </button>
      <Movies />
    </div>
  );
};

export default Home;
