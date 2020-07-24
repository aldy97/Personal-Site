import React, { useEffect, useState } from 'react';
import MobileHeader from './MobileHeader';
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
  @media (max-width: 1200px) {
    width: 800px;
  }
`;

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log('screen width is: ' + width);
    };
    window.addEventListener('resize', handleResize);
  });

  return width > 1000 ? (
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
        <span
          onClick={() => {
            window.location.href = '/blog';
          }}
        >
          Blog
        </span>
        <span
          onClick={() => {
            window.location.href = '/projects';
          }}
        >
          Projects
        </span>
        <a
          style={{ marginRight: 0 }}
          href='https://drive.google.com/file/d/1JFUcNs16bV5_SvarKwQJ83JEw6JRjYC_/view'
        >
          Resume
        </a>
      </span>
    </StyledHeader>
  ) : (
    <MobileHeader width={width}></MobileHeader>
  );
};

export default Header;
