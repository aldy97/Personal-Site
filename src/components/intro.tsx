import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const StyledIntro = styled.div`
  margin-top: ${theme.$marginSection};
  text-align: center;
  font-size: ${theme.$introFontSize};
  i {
    color: ${theme.$themeColor};
    font-size: ${theme.$iconSize};
    margin-right: 20px;
    cursor: pointer;
  }
`;

function Intro() {
  return (
    <StyledIntro>
      <div>My Name is Feng Xiong</div>
      <div>I am a front-end developer</div>
      <div>And a back-end beginner</div>
      <div>
        <i className='iconfont icon-github'></i>
        <i className='iconfont icon-linkedin'></i>
        <i className='iconfont icon-emailmarketing_filled'></i>
      </div>
    </StyledIntro>
  );
}

export default Intro;
