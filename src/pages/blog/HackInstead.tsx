import React from 'react';
import SubTitle from '../../components/SubTitle';
import BlogLayout from '../../components/blogLayout';

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
  <SubTitle>Day One</SubTitle>,
  <p>
    I had a long conversation with my two group member Chien-yu and Abhinav. We
    basically talked about which topic to pick for our projects. It was not that
    sufficient because neither one of them has coding experience. Later on, the
    other guy, Jagan is back in the discord chat. He is a student from
    University of Waterloo. We had a decent conversation on API and task
    assignment and stuff. We were struggling with finding APIs provided by
    Health Canada initially, and gladly we found a git repo that provides these.
    Soon after he went to sleep, I started to work on UI components and layout
    on my own...
  </p>,
];

function HackInstead() {
  return <BlogLayout index={5} content={content} height={250}></BlogLayout>;
}

export default HackInstead;
