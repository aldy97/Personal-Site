import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const StyledHeader = styled.div`
  height: ${theme.$headerHeight};
  line-height: ${theme.$headerHeight};
  font-size: ${theme.$headerFontSize};
  padding-left: ${theme.$headerPadding};
  padding-right: ${theme.$headerPadding};
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
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <span className='left'>
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
