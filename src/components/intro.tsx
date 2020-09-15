import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const StyledIntro = styled.div`
  width: ${(props) => props.theme.$headerWidth};
  margin-top: ${(props) => props.theme.$marginSection};
  margin-bottom: ${(props) => props.theme.$marginSection};
  margin-left: auto;
  margin-right: auto;
  font-size: ${(props) => props.theme.$introFontSize};
  font-weight: 700;
  div {
    margin-bottom: 6px;
  }
  .name {
    color: ${(props) => props.theme.$name};
  }
  .pos {
    color: ${(props) => props.theme.$themeColor};
  }
  .iconWrapper {
    a {
      font-size: ${(props) => props.theme.$iconSize};
      margin-right: 10px;
      color: ${(props) => props.theme.$icon};
    }
  }
  @media (max-width: 1200px) {
    width: 800px;
  }
  @media (max-width: 1000px) {
    width: 350px;
    font-size: 30px;
    div {
      text-align: center;
    }
  }
`;

const Intro: React.FC = () => {
  return (
    <StyledIntro>
      <div className='name'>I am Feng Xiong</div>
      <Fade left>
        <div className='pos'>Web/iOS developer</div>
        <div className='pos'>Passionate learner</div>

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
