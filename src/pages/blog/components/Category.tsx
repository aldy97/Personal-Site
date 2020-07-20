import React from 'react';
import styled from 'styled-components';
import { tag } from '../../../components/projectsList';
import { Tag } from 'antd';
import theme from '../../../theme/theme';

const StyledCategory = styled.div`
  font-weight: bold;
  font-size: ${theme.$headerFontSize};
`;

type CategoryProps = {
  tagList: tag[];
};

const Category = ({ tagList }: CategoryProps) => {
  return (
    <StyledCategory>
      <div>Categories:</div>
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
