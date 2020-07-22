import React from 'react';
import Intro from '../components/intro';
import Projects from '../components/projects';
import Blog from '../components/blog';
import Divider from '../common/divider';
import theme from '../theme/theme';

//number of projects and posts rendered on home page
const projectNum = 3;
const blogNum = 3;

const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <Projects
        width={theme.$projectWidth as number}
        proNum={projectNum}
        showButton={true}
        showFilter={false}
      />
      <Divider />
      <Blog
        width={theme.$blogWidth as number}
        blogNum={blogNum}
        showButton={true}
        showFilter={false}
      />
    </div>
  );
};

export default Home;
