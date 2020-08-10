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
  <SubTitle>Day Two</SubTitle>,
  <p>
    Thing did not go well in the morning when I attempted to implement a map
    using GeoJSON. So I left this job to Jagan and started to work on API and
    stuff. The afternoon was productive and I successfully got data from the API
    provided by John Hopkins University. The conversion of data from JSON to
    JavaScript was tough, but I made it! With usage of Echarts, the data was
    finally visualized. Later on, I also came up with another function that
    allows user not only to choose specific region, but also in how many past
    days the data is shown. With previous knowledge in using axios, this was not
    as hard as before.
  </p>,
  <SubTitle>Day Three</SubTitle>,
  <p>
    I had an argument with Chien on layout and stuff, which I considered as very
    minor things. I switched my layout from left-right to top-bottom structure.
    It truly made my content seem to be richer, but it was a crappy work
    anyways, lol. I wish I could do more during these two days, but it was a
    good start for a person like me who participated in hackathon for the first
    time. Next time, I will for sure do better. This is{' '}
    <a href='http://covid-19-canada.netlify.app'>my link</a> to the project that
    we finished. I will expand its functionality during my spare time in the
    future.
  </p>,
];

function HackInstead() {
  return <BlogLayout index={5} content={content} height={250}></BlogLayout>;
}

export default HackInstead;
