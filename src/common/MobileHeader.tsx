import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import theme from '../theme/theme';

const { SubMenu } = Menu;
class MobileHeader extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub2'],
  };

  onOpenChange = (openKeys: any) => {
    const latestOpenKey = openKeys.find(
      (key: any) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Menu
        mode='inline'
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: window.innerWidth }}
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
  }
}

export default MobileHeader;
