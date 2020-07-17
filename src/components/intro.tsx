import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const StyledIntro = styled.div`
  width: ${theme.$headerWidth};
  margin-top: ${theme.$marginSection};
  margin-bottom: ${theme.$marginSection};
  margin-left: auto;
  margin-right: auto;
  font-size: ${theme.$introFontSize};
  font-weight: 700;
  div {
    margin-bottom: 6px;
  }
  .pos {
    color: ${theme.$themeColor};
  }
  .iconWrapper {
    a {
      font-size: ${theme.$iconSize};
      margin-right: 10px;
      color: ${theme.$jsYellow};
    }
  }
  @media (max-width: 500px) {
    width: 300px;
    font-size: 28px;
    div {
      text-align: center;
    }
  }
`;

const Intro: React.FC = () => {
  return (
    <StyledIntro>
      <div>I am Feng Xiong</div>
      <div className='pos'>Front-end developer</div>
      <div className='pos'>UI design enthusiastic</div>
      <div className='iconWrapper'>
        <a
          className='iconfont icon-github'
          href='https://github.com/aldy97'
        ></a>
        <a className='iconfont icon-linkedin' href=''></a>
        <a className='iconfont icon-emailmarketing_filled' href=''></a>
      </div>
    </StyledIntro>
  );
};

export default Intro;
