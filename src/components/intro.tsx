import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const StyledIntro = styled.div`
  margin-top: ${theme.$marginSection};
  margin-left: ${theme.$headerPadding};
  margin-bottom: ${theme.$marginSection};
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
`;

const Intro: React.FC = () => {
  return (
    <StyledIntro>
      <div>I am Feng Xiong</div>
      <div className='pos'>Front-end developer</div>
      <div className='pos'>Sports enthusiastic</div>
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
