import React from 'react';
import PrevNextCard from '../../components/PrevNextCard';
import Category from '../../components/Category';
import { StyledBlog, StyledTitle, ImgHolder, PublishedTime } from './TSvsJS';
import blogList from '../../components/blogList';

const ReactHooks: React.FC = () => {
  const index: number = 1;
  const thisBlog = blogList[index];
  const date = thisBlog.time.format('YYYY - MM - DD');
  return (
    <StyledBlog>
      <StyledTitle>{thisBlog.title}</StyledTitle>
      <PublishedTime>Published on {date}</PublishedTime>
      <ImgHolder height={350} width={800} mobileHeight={150}>
        <img alt='' src={thisBlog.pic} />
      </ImgHolder>
      <p>
        React Hooks are a way to "hook" into a functional component.Functional
        components used to be stateless component, which means they have never
        been able to hold a state, but with Hooks, it gives them the power to do
        so now.
      </p>
      <p>
        State is written in a much cleaner way and setting or updating that
        state can be declared in as little as one line.Then you have lifecycle
        methods like componentDidMount that will be taken care of by useEffect.
        Hooks are powerful, and it allows for functional components to harness
        that power.
      </p>
      <p>
        One prominent effectiveness of Hooks is that it maintains simplicity of
        functional component, while it dramatically expands conditions in which
        functional component can be used.
      </p>
      <Category tagList={thisBlog.tags}></Category>
      <PrevNextCard index={1} />
    </StyledBlog>
  );
};

export default ReactHooks;
