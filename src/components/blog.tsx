import React from 'react';
import blogList, { blog } from './blogList';
import { tag } from './projectsList';
import { StyledProjects } from './projects';
import { Card, Tag } from 'antd';
import styled from 'styled-components';
import theme from '../theme/theme';
import 'antd/dist/antd.css';

const StyledBlog = styled(StyledProjects)``;
const StyledCard = styled(Card)`
  margin-top: ${theme.$marginSection};
  margin-bottom: ${theme.$marginSection};
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  width: 800px;
  @media (max-width: 500px) {
    width: 300px;
  }
`;

const StyledTag = styled(Tag)`
  margin-top: 12px;
`;

const { Meta } = Card;

const Blog: React.FC = () => {
  return (
    <StyledBlog>
      <div className='title'>Blog</div>
      {blogList.map((blog: blog, index: number) => {
        return (
          <StyledCard
            key={index}
            cover={<img alt='' src={blog.pic} />}
            hoverable={true}
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
        );
      })}
    </StyledBlog>
  );
};

export default Blog;
