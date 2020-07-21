import React from 'react';
import blogList from './blogList';
import PrevNextCard from './PrevNextCard';
import Category from './Category';
import ImgHolder from './ImgHolder';
import theme from '../theme/theme';
import { StyledBlog, StyledTitle, PublishedTime } from '../pages/blog/TSvsJS';

type blogLayoutProps = {
  index: number;
  content: any[];
  height: number;
};

//Abstracted for generating single blog page
const BlogLayout = ({ index, content, height }: blogLayoutProps) => {
  const thisBlog = blogList[index];
  const date = thisBlog.time.format('YYYY - MM - DD');

  //Ratio between blog width on PC and mobile to calculate the banner height on mobile-end
  const ratio = (theme.$mobileWidth as number) / (theme.$blogWidth as number);
  const mobileHeight = height * ratio;

  return (
    <StyledBlog>
      <StyledTitle>{thisBlog.title}</StyledTitle>
      <PublishedTime>Published on {date}</PublishedTime>
      <ImgHolder
        height={height}
        mobileHeight={mobileHeight}
        src={thisBlog.pic}
      ></ImgHolder>
      {content}
      <Category tagList={thisBlog.tags}></Category>
      <PrevNextCard index={index} />
    </StyledBlog>
  );
};

export default BlogLayout;
