import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const StyledDivider = styled.div`
  width: 75%;
  height: 1px;
  border-top: 1px solid #6cb1f7;
`;

function Divider() {
  return <StyledDivider></StyledDivider>;
}

export default Divider;
