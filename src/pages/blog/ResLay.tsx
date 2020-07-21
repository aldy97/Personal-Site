import React from 'react';
import BlogLayout from '../../components/blogLayout';
import ImgHolder from '../../components/ImgHolder';

const ResLay = () => {
  const content = [
    <p>Hi</p>,
    <p>Test</p>,
    <ImgHolder>
      <img src={require('../../static/TSvsJS/247.png')} />
    </ImgHolder>,
  ];
  return <BlogLayout index={3} content={content} height={450}></BlogLayout>;
};

export default ResLay;
