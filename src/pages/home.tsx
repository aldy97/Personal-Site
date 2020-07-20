import React from 'react';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Blog from '../components/blog';
import Divider from '../common/divider';

const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <Projects showButton={true} />
      <Divider />
      <Blog width={800} blogNum={3} showButton={true} />
    </div>
  );
};

export default Home;
