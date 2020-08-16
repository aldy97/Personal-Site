import React from 'react';
import SubTitle from '../../components/SubTitle';
import BlogLayout from '../../components/blogLayout';
import ImgHolder from '../../components/ImgHolder';

const content = [<p></p>];

const DarkMode: React.FC = () => {
  return <BlogLayout index={6} content={content} height={533}></BlogLayout>;
};

export default DarkMode;
