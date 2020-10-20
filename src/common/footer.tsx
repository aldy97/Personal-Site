import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const StyledFooter = styled.div`
    margin-top: ${(props) => props.theme.$marginSection};
    height: ${(props) => props.theme.$headerHeight};
    line-height: ${(props) => props.theme.$headerHeight};
    border-top: 1px solid ${(props) => props.theme.$themeColor};
    background: ${(props) => props.theme.$background};
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
      color: ${(props) => props.theme.$themeColor};
      font-size: ${(props) => props.theme.$headerFontSize};
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
      <a
        style={{ marginLeft: 20, marginRight: 20 }}
        href='https://www.linkedin.com/in/feng-xiong-ba3a76166/'
      >
        Linkedin
      </a>
      <a href='mailto:fengxiong34@gmail.com'>Email</a>
    </StyledFooter>
  );
};

export default Footer;
