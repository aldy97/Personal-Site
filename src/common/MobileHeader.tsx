import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import useInnerWidth from '../hooks/useInnerWidth';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

const StyledMenu = styled(Menu)`
  background: ${(props) => props.theme.$background};
`;

type MobileHeaderProps = {
  dark: boolean;
};
function MobileHeader({ dark }: MobileHeaderProps) {
  const width = useInnerWidth();
  const [theme, setTheme] = useState(dark ? 'dark' : 'light');
  const [current, setCurrent] = useState('1');

  useEffect(() => {
    setTheme(dark ? 'dark' : 'light');
  }, [dark]);

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <StyledMenu
        style={{
          color: theme === 'dark' ? '#6282c4' : 'rgb(0, 122, 204)',
          width: width,
          background: theme === 'dark' ? '#09215a' : '#fff',
        }}
        theme={theme as any}
        onClick={handleClick}
        mode='inline'
      >
        <SubMenu key='sub1' title='Feng (Aldy) Xiong'>
          <Menu.Item key='1'>
            <a href='/'>Home</a>
          </Menu.Item>
          <Menu.Item key='2'>
            <a href='/projects'>Project</a>
          </Menu.Item>
          <Menu.Item key='3'>
            <a href='/blog'>Blog</a>
          </Menu.Item>
          <Menu.Item key='4'>
            <a href='https://drive.google.com/file/d/10a8UpIcUg-PXGkviKI86gGLTcQ9gLMIS/view?usp=sharing'>
              Resume
            </a>
          </Menu.Item>
        </SubMenu>
      </StyledMenu>
    </div>
  );
}

export default MobileHeader;
