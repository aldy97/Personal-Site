import React from 'react';
import SubTitle from '../../components/SubTitle';
import BlogLayout from '../../components/blogLayout';
import ImgHolder from '../../components/ImgHolder';

const content = [
  <p>
    I am super excited as I am writing this blog right now. At this moment, I am
    waiting for the hack to officially start, discord is in, slack is in and
    zoom is in, tea is ready... Everything has been prepared! This hackathon
    will last for 3 days, and the first day will be just group meeting and
    stuff, kinda chill. Our tentative group project topic is Covid-19 Canada,
    inspired by <a href='https://www.covid19india.org/'>Covid-19 India</a>,
    which is an ambitious goal! I will be updating this blog consistently as the
    hack goes on.
  </p>,
];

function HackInstead() {
  return <BlogLayout index={5} content={content} height={250}></BlogLayout>;
}

export default HackInstead;
