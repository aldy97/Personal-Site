import React, { useState } from 'react';
import blogList from './blogList';
import Filter from './Filter';
import { StyledButton, StyledCard } from './projects';
import { tag } from './projectsList';
import { Card, Tag } from 'antd';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import theme from '../theme/theme';
import useInnerHeight from '../hooks/useInnerHeight';
import useFilter from '../hooks/useFilter';
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

  const handleChange = (value: string) => {
    setCategorySelected(value);
  };

  //Determine whether tags contain one that matches category being selected
  const hasThisCateory = (tags: tag[], tagName: string) => {
    return tags.map((tag) => tag.name).includes(tagName);
  };

  const filteredBlogList = blogList.filter((blog) =>
    hasThisCateory(blog.tags, categorySelected)
  );

  const height = useInnerHeight();

  const minHeight = height - 2.3 * 60;

  const StyledBlog = styled.div`
    min-height: ${minHeight}px;
    .title {
      color: ${theme.$themeColor};
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

  return (
    <StyledBlog>
      <Fade top>
        <div className='title' style={{ marginBottom: showFilter ? 20 : -20 }}>
          Blog
        </div>
      </Fade>
      {showFilter ? (
        <div className='filter-wrapper'>
          <Filter handleChange={handleChange} type='blog'></Filter>
        </div>
      ) : (
        <div></div>
      )}
      {(categorySelected === 'All' ? blogList : filteredBlogList)
        .reverse()
        .slice(0, blogNum)
        .map((blog, index: number) => {
          return (
            <Fade bottom>
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
                {blog.tags.map((tag, index: number) => {
                  return (
                    <StyledTag key={index} color={tag.color}>
                      {tag.name}
                    </StyledTag>
                  );
                })}
              </StyledCard>
            </Fade>
          );
        })}
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
