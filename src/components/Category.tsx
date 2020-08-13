import React from 'react';
import styled from 'styled-components';
import { tag } from './projectsList';
import { Tag } from 'antd';
import theme from '../theme/theme';

const StyledCategory = styled.div`
  font-weight: bold;
  font-size: ${theme.$headerFontSize};
  .c {
    color: ${(props) => props.theme.$category};
  }
`;

type CategoryProps = {
  tagList: tag[];
};

const Category = ({ tagList }: CategoryProps) => {
  return (
    <StyledCategory>
      <div className='c'>Categories:</div>
      {tagList.map((tag, index) => {
        return (
          <Tag key={index} color={tag.color}>
            {tag.name}
          </Tag>
        );
      })}
    </StyledCategory>
  );
};

export default Category;
