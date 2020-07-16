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
`;

const Intro: React.FC = () => {
  return (
    <StyledIntro>
      <div>I am Feng Xiong</div>
      <div className='pos'>Front-end developer</div>
      <div className='pos'>Sports enthusiastic</div>
    </StyledIntro>
  );
};

export default Intro;
