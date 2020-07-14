import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const StyledHeader = styled.div`
  height: calc(100vh);
  font-size: ${theme.$headerFontSize};
  }
  img {
    height: calc(100vh);
    width: calc(100vw);
    object-fit: cover;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img alt='' src={require('../static/M.jpeg')}></img>
      <div>lolpllsdflsdjf</div>
    </StyledHeader>
  );
}

export default Header;
