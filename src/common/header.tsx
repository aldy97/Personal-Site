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
        <span style={{ marginRight: 0 }}>Resume</span>
      </span>
    </StyledHeader>
  );
};

export default Header;
