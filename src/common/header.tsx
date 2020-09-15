import React from 'react';
import { Switch } from 'antd';
import MobileHeader from './MobileHeader';
import styled from 'styled-components';
import useInnerWidth from '../hooks/useInnerWidth';
import 'antd/dist/antd.css';

const StyledHeader = styled.div`
  height: ${(props) => props.theme.$headerHeight};
  width: ${(props) => props.theme.$headerWidth};
  margin-left: auto;
  margin-right: auto;
  line-height: ${(props) => props.theme.$headerHeight};
  font-size: ${(props) => props.theme.$headerFontSize};
  color: ${(props) => props.theme.$themeColor};
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
      color: ${(props) => props.theme.$themeColor};
    }
    .switch {
      margin-left: 35px;
    }
  }
  @media (max-width: 1200px) {
    width: 800px;
  }
`;

type HeaderProps = {
  toogleDark: any;
  dark: boolean;
};
const Header = ({ toogleDark, dark }: HeaderProps) => {
  const width = useInnerWidth();

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
        <a href='https://drive.google.com/file/d/121szG1iCFtlS8Aqz6RitVPC829kzw0TE/view?usp=sharing'>
          Resume
        </a>
        <Switch
          className='switch'
          onClick={toogleDark}
          defaultChecked={window.localStorage.getItem('theme') === 'dark'}
          checkedChildren='🌛'
          unCheckedChildren='🌞'
        ></Switch>
      </span>
    </StyledHeader>
  ) : (
    <MobileHeader dark={dark}></MobileHeader>
  );
};

export default Header;
