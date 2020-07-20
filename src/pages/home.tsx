import React from 'react';
import theme from '../theme/theme';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Blog from '../components/blog';
import Divider from '../common/divider';

const projectNum = 3;
const blogNum = 3;

const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <Projects width={600} proNum={projectNum} showButton={true} />
      <Divider />
      <Blog width={800} blogNum={blogNum} showButton={true} />
    </div>
  );
};

export default Home;
