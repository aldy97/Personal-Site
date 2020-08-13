import React, { useState } from 'react';
import useFilter from '../hooks/useFilter';
import { blog } from './blogList';
import Filter from './Filter';
import { StyledButton } from './projects';
import { Card, Tag } from 'antd';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import theme from '../theme/theme';
import useInnerHeight from '../hooks/useInnerHeight';
import blogList from './blogList';
import 'antd/dist/antd.css';

const StyledTag = styled(Tag)`
  margin-top: 12px;
`;

const { Meta } = Card;

type BlogProps = {
  width: number;
  blogNum: number;
  showFilter: boolean;
  showButton: boolean;
};

const Blog = ({ width, blogNum, showButton, showFilter }: BlogProps) => {
  const [categorySelected, setCategorySelected] = useState('All');

  const handleClick = (key: any): void => {
    setCategorySelected(key.key);
  };

  const getHomeBlogList = (blogNum: number): blog[] => {
    let HomeBlogList: blog[] = [];
    for (let i = 0; i <= blogNum + 1; i++) {
      if (blogList.length !== 0) {
        HomeBlogList.push(blogList[blogList.length - 1 - i]);
      }
      blogNum--;
    }
    return HomeBlogList;
  };

  const filteredList = useFilter('blog', categorySelected) as blog[];

  const height = useInnerHeight();

  const minHeight = height - 2 * 60;

  const StyledBlog = styled.div`
    min-height: ${minHeight}px;
    .title {
      color: ${(props) => props.theme.$themeColor};
      font-size: ${theme.$titleSize};
      margin-bottom: 0;
      text-align: center;
    }
    .filter-wrapper {
      text-align: center;
    }
    .button {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 500px) {
      margin-bottom: 0px;
    }
  `;
  type CardProps = {
    width: number;
  };
  const StyledBlogCard = styled(Card)<CardProps>`
    width: ${(props) => `${props.width}px`};
    margin-left: auto;
    margin-right: auto;
    margin-top: ${(props) => props.theme.$marginSection};
    margin-bottom: ${(props) => props.theme.$marginSection};
    @media (max-width: 1000px) {
      width: 600px;
    }
    @media (max-width: 600px) {
      width: ${(props) => props.theme.$mobileWidth}px;
    }
  `;

  return (
    <StyledBlog>
      <Fade top>
        <div className='title' style={{ marginBottom: showFilter ? 20 : -20 }}>
          Blog
        </div>
      </Fade>
      {showFilter ? (
        <div className='filter-wrapper'>
          <Filter handleClick={handleClick} type='blog'></Filter>
        </div>
      ) : (
        <div></div>
      )}
      {(showFilter ? filteredList : getHomeBlogList(blogNum)).map(
        (blog, index: number) => {
          return (
            <Fade bottom>
              <StyledBlogCard
                key={index}
                cover={<img alt='' src={blog.pic} />}
                width={width}
                bordered={false}
                hoverable={true}
                onClick={() => {
                  window.location.href = blog.href;
                }}
              >
                <Meta title={blog.title} description={blog.desc} />
                {blog.tags.map((tag, index: number) => {
                  return (
                    <StyledTag key={index} color={tag.color}>
                      {tag.name}
                    </StyledTag>
                  );
                })}
              </StyledBlogCard>
            </Fade>
          );
        }
      )}
      <Fade top>
        <StyledButton
          show={showButton}
          className='button'
          onClick={() => {
            window.location.href = '/blog';
          }}
        >
          View all posts
        </StyledButton>
      </Fade>
    </StyledBlog>
  );
};

export default Blog;
