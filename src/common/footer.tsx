import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const Footer = () => {
  const StyledFooter = styled.div`
    margin-top: ${theme.$marginSection};
    height: ${theme.$headerHeight};
    line-height: ${theme.$headerHeight};
    text-align: center;
    border-top: 1px solid ${theme.$themeColor};
    background: #fff;
    a {
      color: ${theme.$themeColor};
      font-size: ${theme.$headerFontSize};
      margin-right: 20px;
      cursor: pointer;
    }
    @media (max-width: 500px) {
      width: 100%;
      display: flex;
      a {
        flex: 1;
        text-align: center;
        margin-right: 0;
      }
    }
  `;

  return (
    <StyledFooter>
      <a href='https://github.com/aldy97'>Github</a>
      <a href='https://www.linkedin.com/in/feng-xiong-ba3a76166/'>Linkedin</a>
      <a href='mailto:fengxiong34@gmail.com'>Email</a>
    </StyledFooter>
  );
};

export default Footer;
