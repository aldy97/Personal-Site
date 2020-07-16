import React from 'react';
import Intro from '../components/intro';
import Projects from '../components/projects';

const Home: React.FC = () => {
  return (
    <div>
      <Intro></Intro>
      <Projects></Projects>
    </div>
  );
};

export default Home;
