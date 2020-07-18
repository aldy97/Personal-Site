import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const StyledFooter = styled.div`
  margin-top: ${theme.$marginSection};
  height: ${theme.$headerHeight};
  line-height: ${theme.$headerHeight};
  text-align: center;
  border-top: 1px solid ${theme.$themeColor};
  a {
    color: ${theme.$themeColor};
    font-size: ${theme.$iconSize};
    margin-right: 20px;
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

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <a className='iconfont icon-github' href='https://github.com/aldy97'></a>
      <a
        className='iconfont icon-linkedin'
        href='https://www.linkedin.com/in/feng-xiong-ba3a76166/'
      ></a>
      <a
        className='iconfont icon-emailmarketing_filled'
        href='mailto:fengxiong34@gmail.com'
      ></a>
    </StyledFooter>
  );
};

export default Footer;
