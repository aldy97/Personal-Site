import React from 'react';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Blog from '../components/blog';
import Divider from '../common/divider';

const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <Projects />
      <Divider />
      <Blog />
    </div>
  );
};

export default Home;
