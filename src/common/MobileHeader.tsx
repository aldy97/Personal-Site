// type HeaderProps = {
//   width: number;
//   toogleDark: any;
// };
// const { SubMenu } = Menu;
// const MobileHeader = ({ width, toogleDark }: HeaderProps) => {
//   // submenu keys of first level
//   const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

//   const [state, setState] = useState({
//     openKeys: ['sub2'],
//   });

//   const onOpenChange = (openKeys: any) => {
//     const latestOpenKey = openKeys.find(
//       (key: any) => state.openKeys.indexOf(key) === -1
//     );
//     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//       setState({ openKeys });
//     } else {
//       setState({
//         openKeys: latestOpenKey ? [latestOpenKey] : [],
//       });
//     }
//   };

//   const StyledMenu = styled(Menu)`
//     background: ${(props) => props.theme.$background};
//     .name {
//       color: ${(props) => props.theme.$headerName};
//     }
//   `;

//   const StyledSubMenu = styled(SubMenu)``;

//   return (
//     <StyledMenu
//       mode='inline'
//       openKeys={state.openKeys}
//       onOpenChange={onOpenChange}
//       style={{ width: width }}
//     >
//       <StyledSubMenu
//         key='sub1'
//         title={
//           <span>
//             <span>
//               <div className='name'>Feng (Aldy) Xiong</div>
//             </span>
//           </span>
//         }
//       >
//         <Menu.Item key='0' className='0'>
//           <a href='/'>Home</a>
//         </Menu.Item>
//         <Menu.Item key='1'>
//           <a href='/projects'>Projects</a>
//         </Menu.Item>
//         <Menu.Item key='2'>
//           <a href='/blog'>Blog</a>
//         </Menu.Item>
//         <Menu.Item key='3'>
//           <a href='https://drive.google.com/file/d/10a8UpIcUg-PXGkviKI86gGLTcQ9gLMIS/view?usp=sharing'>
//             Resume
//           </a>
//         </Menu.Item>
//       </StyledSubMenu>
//     </StyledMenu>
//   );
// };

import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import useInnerWidth from '../hooks/useInnerWidth';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

const StyledMenu = styled(Menu)``;

type MobileHeaderProps = {
  dark: boolean;
};
function MobileHeader({ dark }: MobileHeaderProps) {
  const width = useInnerWidth();
  const [theme, setTheme] = useState(dark ? 'dark' : 'light');
  const [current, setCurrent] = useState('1');

  useEffect(() => {
    setTheme(dark ? 'dark' : 'light');
  });

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <StyledMenu
        style={{ width: width }}
        theme={theme as any}
        onClick={handleClick}
        selectedKeys={[current]}
        mode='inline'
      >
        <SubMenu key='sub1' title='Feng (Aldy) Xiong'>
          <Menu.Item key='1'>
            <a href='./'>Home</a>
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
