import React from 'react';
import PrevNextCard from './PrevNextCard';
import blogList, { blog } from '../../components/blogList';
import styled from 'styled-components';
import theme from '../../theme/theme';

export const StyledBlog = styled.div`
  width: ${theme.$blogWidth};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${theme.$marginSection};
  text-align: center;
  p {
    // margin-top: ${theme.$marginSection};
    // margin-bottom: ${theme.$marginSection};
    font-size: ${theme.$headerFontSize};
    text-align: left;
  }
  @media (max-width: 500px) {
    width: ${theme.$mobileWidth};
    p {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 18px;
    }
  }
`;

export const StyledTitle = styled.div`
  color: ${theme.$themeColor};
  font-size: ${theme.$titleSize};
  font-weight: 800;
  margin-bottom: ${theme.$marginSection};
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

type ImgHolderProps = {
  width?: number;
  height?: number;
  mobileHeight?: number;
};

export const ImgHolder = styled.div<ImgHolderProps>`
  width: ${(props) => (props.width ? `${props.width}px` : theme.$blogWidth)};
  height: ${(props) => (props.height ? `${props.height}px` : '')};
  margin-bottom: ${theme.$marginSection};
  img {
    width: ${(props) => (props.width ? `${props.width}px` : theme.$blogWidth)};
    height: ${(props) => (props.height ? `${props.height}px` : '')};
  }
  @media (max-width: 500px) {
    width: ${theme.$mobileWidth};
    height: ${(props) =>
      props.mobileHeight ? `${props.mobileHeight}px` : '180px'};
    img {
      width: ${theme.$mobileWidth};
      height: ${(props) =>
        props.mobileHeight ? `${props.mobileHeight}px` : '180px'};
      object-fit: fill;
    }
  }
`;

const TSvsJS: React.FC = () => {
  const index: number = 0;
  const receivedblogList: blog[] = blogList;
  const thisBlog = receivedblogList[index];
  return (
    <StyledBlog>
      <StyledTitle>{thisBlog.title}</StyledTitle>
      <ImgHolder>
        <img alt='' src={thisBlog.pic} />
      </ImgHolder>
      <p>
        What is Typescript? Typescript is a modern age Javascript development
        language. It is a statically compiled language to write clear and simple
        Javascript code. It can be run on Node js or any browser which supports
        ECMAScript 3 or newer versions. Typescript provides optional static
        typing, classes, and interface. For a large JavaScript project adopting
        Typescript can bring you more robust software and easily deployable with
        a regular JavaScript application.
      </p>
      <p>
        <strong>Why Typescript?</strong>
        <ul>
          <li>TypeScript supports JS libraries & API Documentation</li>
          <li>It is a superset of Javascript</li>
          <li>It is optionally typed scripting language</li>
          <li>TypeScript Code can be converted into plain JavaScript Code</li>
          <li>
            Better code structuring and object-oriented programming techniques
          </li>
          <li>Allows better development time tool support</li>
          <li>
            It can extend the language beyond the standard decorators,
            async/await
          </li>
        </ul>
      </p>
      <p>
        <strong>Why JavaScript?</strong>
        <ul>
          <li>Open source project with Microsoft's patronage</li>
          <li>Specially designed tool for small scripts</li>
          <li>Supports classes, interfaces & modules</li>
          <li>Compiled JavaScript runs in any browser</li>
          <li>Allows cross-compilation</li>
          <li>You can extend JavaScript for writing large apps</li>
          <li>Adds support for classes, interfaces, and modules</li>
        </ul>
      </p>
      <p style={{ marginBottom: 0 }}>Now let's have look at a specific case:</p>
      <ImgHolder width={300} height={200}>
        <img alt='' src={require('../../static/TSvsJS/248.png')} />
      </ImgHolder>
      <p>
        I created a type called 'tag', which contains two fields: both of them
        are of string.
      </p>
      <ImgHolder mobileHeight={350}>
        <img alt='' src={require('../../static/TSvsJS/247.png')} />
      </ImgHolder>
      <p>
        Since I have declared tag as type 'tag', which I have defined
        previously. VS code now can <strong>auto-generate</strong> its
        corresponding properties. This
        <strong> Java-like coding feature </strong>
        greatly boots development speed and increases robustness. This would
        have not been accomplished if using JavaScript.
      </p>
      <PrevNextCard index={index} />
    </StyledBlog>
  );
};

export default TSvsJS;
