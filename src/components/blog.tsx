import React from 'react';
import blogList, { blog } from './blogList';
import { tag } from './projectsList';
import { StyledProjects, StyledButton } from './projects';
import { Card, Tag } from 'antd';
import styled from 'styled-components';
import theme from '../theme/theme';
import { Animated } from 'react-animated-css';
import 'antd/dist/antd.css';

const StyledBlog = styled(StyledProjects)``;

type CardProps = {
  width: number;
};
const StyledCard = styled(Card)<CardProps>`
  margin-top: ${theme.$marginSection};
  margin-bottom: ${theme.$marginSection};
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  width: ${(props) => `${props.width}px`};
  @media (max-width: 500px) {
    width: 350px;
  }
`;

const StyledTag = styled(Tag)`
  margin-top: 12px;
`;

const { Meta } = Card;

type BlogProps = {
  width: number;
  blogNum: number;
  showButton: boolean;
};
const Blog = ({ width, blogNum, showButton }: BlogProps) => {
  return (
    <StyledBlog>
      <Animated
        animationIn='fadeInDown'
        animationInDuration={1000}
        animationOut='fadeIn'
        isVisible={true}
      >
        <div className='title'>Blog</div>
      </Animated>
      {blogList.slice(0, blogNum).map((blog: blog, index: number) => {
        return (
          <Animated
            animationIn='fadeInUp'
            animationInDuration={1500}
            animationOut='fadeIn'
            isVisible={true}
          >
            <StyledCard
              key={index}
              cover={<img alt='' src={blog.pic} />}
              hoverable={true}
              width={width}
              onClick={() => {
                window.location.href = blog.href;
              }}
            >
              <Meta title={blog.title} description={blog.desc} />
              {blog.tags.map((tag: tag, index: number) => {
                return (
                  <StyledTag key={index} color={tag.color}>
                    {tag.name}
                  </StyledTag>
                );
              })}
            </StyledCard>
          </Animated>
        );
      })}
      <StyledButton
        show={showButton}
        className='button'
        onClick={() => {
          window.location.href = '/blog';
        }}
      >
        View all posts
      </StyledButton>
    </StyledBlog>
  );
};

export default Blog;
