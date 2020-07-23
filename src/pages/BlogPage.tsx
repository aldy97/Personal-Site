import React from 'react';
import Blog from '../components/blog';
import blogList from '../components/blogList';
import styled from 'styled-components';

const minHeight = window.innerHeight - 2.7 * 60;
export const PageWrapper = styled.div`
  min-height: ${minHeight}px;
`;

const TotalBlogNum = blogList.length;
const BlogPage: React.FC = () => {
  return (
    <PageWrapper>
      <Blog
        width={1000}
        blogNum={TotalBlogNum}
        showButton={false}
        showFilter={true}
      ></Blog>
    </PageWrapper>
  );
};

export default BlogPage;
