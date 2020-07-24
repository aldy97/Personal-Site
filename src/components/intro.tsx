import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';
import Fade from 'react-reveal/Fade';

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
  @media (max-width: 1200px) {
    width: 800px;
  }
  @media (max-width: 1000px) {
    width: 350px;
    font-size: 2rem;
    div {
      text-align: center;
    }
  }
`;

const Intro: React.FC = () => {
  return (
    <StyledIntro>
      <div>I am Feng Xiong</div>
      <Fade left>
        <div className='pos'>Front-end developer</div>
        <div className='pos'>UI design enthusiastic</div>

        <div className='iconWrapper'>
          <a
            className='iconfont icon-github'
            href='https://github.com/aldy97'
          ></a>
          <a
            className='iconfont icon-linkedin'
            href='https://www.linkedin.com/in/feng-xiong-ba3a76166/'
          ></a>
          <a
            className='iconfont icon-emailmarketing_filled'
            href='mailto:fengxiong34@gmail.com'
          ></a>
        </div>
      </Fade>
    </StyledIntro>
  );
};

export default Intro;
