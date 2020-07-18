import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const StyledHeader = styled.div`
  height: ${theme.$headerHeight};
  width: ${theme.$headerWidth};
  margin-left: auto;
  margin-right: auto;
  line-height: ${theme.$headerHeight};
  font-size: ${theme.$headerFontSize};
  color: ${theme.$themeColor};
  span {
    cursor: pointer;
  }
  .right {
    float: right;
    cursor: auto;
    span {
      margin-left: 35px;
      margin-right: 35px;
    }
    a {
      margin-left: 35px;
      color: ${theme.$themeColor};
    }
  }
  @media (max-width: 500px) {
    width: 300px;
    line-height: 40px;
    .left {
      display: block;
      text-align: center;
    }
    .right {
      width: 300px;
      display: flex;
      span {
        flex: 1;
        margin-left: 0;
        margin-right: 0;
        text-align: center;
      }
      a {
        flex: 1;
        margin-left: 0;
        text-align: center;
      }
    }
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <span
        className='left'
        onClick={() => {
          window.location.href = '/';
        }}
      >
        <strong>Feng (Aldy) Xiong</strong>
      </span>
      <span className='right'>
        <span>Blog</span>
        <span>Projects</span>
        <a
          style={{ marginRight: 0 }}
          href='https://drive.google.com/file/d/1JFUcNs16bV5_SvarKwQJ83JEw6JRjYC_/view'
        >
          Resume
        </a>
      </span>
    </StyledHeader>
  );
};

export default Header;
