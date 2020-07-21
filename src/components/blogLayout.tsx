import React from 'react';
import blogList from './blogList';
import PrevNextCard from './PrevNextCard';
import Category from './Category';
import ImgHolder from './ImgHolder';
import theme from '../theme/theme';
import styled from 'styled-components';

const StyledBlog = styled.div`
  width: ${theme.$blogWidth}px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${theme.$marginSection};
  text-align: center;
  p {
    font-size: ${theme.$headerFontSize};
    text-align: left;
  }
  @media (max-width: 500px) {
    width: ${theme.$mobileWidth}px;
    p {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 18px;
    }
  }
`;

const StyledTitle = styled.div`
  color: ${theme.$themeColor};
  font-size: ${theme.$titleSize};
  font-weight: 800;
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

const PublishedTime = styled.div`
  text-align: left;
  color: ${theme.$publishTimeColor};
  font-size: ${theme.$publishTimeFontSize};
  font-weight: 300;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

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
