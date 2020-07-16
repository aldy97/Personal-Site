import React from 'react';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Blog from '../components/blog';

const Home: React.FC = () => {
  return (
    <div>
      <Intro></Intro>
      <Projects></Projects>
      <Blog></Blog>
    </div>
  );
};

export default Home;
