import React from 'react';
import Blog from '../components/blog';
import blogList from '../components/blogList';

const TotalBlogNum = blogList.length;
const BlogPage: React.FC = () => {
  return (
    <Blog
      width={1000}
      blogNum={TotalBlogNum}
      showButton={false}
      showFilter={true}
    ></Blog>
  );
};

export default BlogPage;
