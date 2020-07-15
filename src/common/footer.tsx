import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const StyledFooter = styled.div`
  margin-top: ${theme.$marginSection};
  height: ${theme.$headerHeight};
  line-height: ${theme.$headerHeight};
  text-align: center;
  border-top: 1px solid ${theme.$themeColor};
  i {
    color: ${theme.$themeColor};
    font-size: ${theme.$iconSize};
    margin-right: 20px;
    cursor: pointer;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <i className='iconfont icon-github'></i>
      <i className='iconfont icon-linkedin'></i>
      <i className='iconfont icon-emailmarketing_filled'></i>
    </StyledFooter>
  );
};

export default Footer;
