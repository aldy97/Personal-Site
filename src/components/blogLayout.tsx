import React from 'react';
import blogList from './blogList';
import PrevNextCard from './PrevNextCard';
import Category from './Category';
import ImgHolder from './ImgHolder';
import { StyledBlog, StyledTitle, PublishedTime } from '../pages/blog/TSvsJS';

type blogLayoutProps = {
  index: number;
  content: any[];
  height: number;
};

const BlogLayout = ({ index, content, height }: blogLayoutProps) => {
  const thisBlog = blogList[index];
  const date = thisBlog.time.format('YYYY - MM - DD');
  return (
    <StyledBlog>
      <StyledTitle>{thisBlog.title}</StyledTitle>
      <PublishedTime>Published on {date}</PublishedTime>
      <ImgHolder height={height} mobileHeight={(height * 35) / 80}>
        <img alt='' src={thisBlog.pic} />
      </ImgHolder>
      {content}
      <Category tagList={thisBlog.tags}></Category>
      <PrevNextCard index={index} />
    </StyledBlog>
  );
};

export default BlogLayout;
