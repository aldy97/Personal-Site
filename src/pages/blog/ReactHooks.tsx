import React from 'react';
import PrevNextCard from './PrevNextCard';
import { StyledBlog, StyledTitle, ImgHolder } from './TSvsJS';
import blogList, { blog } from '../../components/blogList';

const ReactHooks: React.FC = () => {
  const index: number = 1;
  const receivedblogList: blog[] = blogList;
  const thisBlog = receivedblogList[index];
  return (
    <StyledBlog>
      <StyledTitle>{thisBlog.title}</StyledTitle>
      <ImgHolder>
        <img alt='' src={thisBlog.pic} />
      </ImgHolder>
      <p>
        React Hooks are a way to "hook" into a functional component. Functional
        components have never been able to hold a state, but with Hooks, it
        gives them the power to do so now.
      </p>
      <p>
        State is written in a much cleaner way and setting or updating that
        state can be declared in as little as one line.Then you have lifecycle
        methods like componentDidMount that will be taken care of by useEffect.
        Hooks are powerful, and it allows for functional components to harness
        that power.
      </p>
      <PrevNextCard index={index} />
    </StyledBlog>
  );
};

export default ReactHooks;
