import React, { useState } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import theme from '../theme/theme';

type HeaderProps = {
  width: number;
};
const { SubMenu } = Menu;
const MobileHeader = ({ width }: HeaderProps) => {
  // submenu keys of first level
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  const [state, setState] = useState({
    openKeys: ['sub2'],
  });

  const onOpenChange = (openKeys: any) => {
    const latestOpenKey = openKeys.find(
      (key: any) => state.openKeys.indexOf(key) === -1
    );
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setState({ openKeys });
    } else {
      setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  return (
    <Menu
      mode='inline'
      openKeys={state.openKeys}
      onOpenChange={onOpenChange}
      style={{ width: width }}
    >
      <SubMenu
        key='sub1'
        title={
          <span>
            <span
              style={{
                fontSize: `${theme.$headerFontSize}`,
                color: `${theme.$themeColor}`,
              }}
            >
              Feng (Aldy) Xiong
            </span>
          </span>
        }
      >
        <Menu.Item key='0'>
          <a href='/'>Home</a>
        </Menu.Item>
        <Menu.Item key='1'>
          <a href='/projects'>Projects</a>
        </Menu.Item>
        <Menu.Item key='2'>
          <a href='/blog'>Blog</a>
        </Menu.Item>
        <Menu.Item key='3'>
          <a href='https://drive.google.com/file/d/1JFUcNs16bV5_SvarKwQJ83JEw6JRjYC_/view'>
            Resume
          </a>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MobileHeader;