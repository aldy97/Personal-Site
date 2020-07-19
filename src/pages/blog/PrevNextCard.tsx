import React from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme';
import blogList, { blog } from '../../components/blogList';

const BlogSwitcher = styled.div`
  width: ${theme.$blogWidth};
  margin-top: ${theme.$marginSection};
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid ${theme.$themeColor};
  border-radius: 6px;
  text-align: left;
  cursor: pointer;
  div {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 18px;
  }
  @media (max-width: 500px) {
    width: ${theme.$mobileWidth};
  }
`;

type prevNextCardProps = {
  index: number;
};

const blogListProps: blog[] = blogList;

const PrevNextCard = ({ index }: prevNextCardProps) => {
  return (
    <div>
      {index !== 0 ? (
        <BlogSwitcher
          onClick={() => {
            window.location.href = blogListProps[index - 1].href;
          }}
        >
          <div>
            <strong>Previous:</strong>
          </div>
          <div>{blogListProps[index - 1].title}</div>
        </BlogSwitcher>
      ) : (
        <div></div>
      )}
      {index !== blogListProps.length - 1 ? (
        <BlogSwitcher
          onClick={() => {
            window.location.href = blogListProps[index + 1].href;
          }}
        >
          <div>
            <strong>Next:</strong>
          </div>
          <div>{blogListProps[index + 1].title}</div>
        </BlogSwitcher>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PrevNextCard;
