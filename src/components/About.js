import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        This is a simple movie search app built with React. It uses the an API
        from <a href="http://www.omdbapi.com/">OMDb API</a> to fetch movie data
        on search.
      </p>
      <p>The app is built with React, React Router, and Context API.</p>

      <button className="home-btn">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default About;
