import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const StyledDivider = styled.hr<DividerProps>`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${theme.$dividerColor};
  width: ${(props) => (props.width ? `${props.width}px` : '1200px')};
  @media (max-width: 500px) {
    width: 350px;
  }
`;

type DividerProps = {
  width?: number;
};

const Divider = ({ width }: DividerProps) => {
  return <StyledDivider width={width}></StyledDivider>;
};

export default Divider;
