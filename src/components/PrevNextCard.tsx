import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';
import blogList from './blogList';

const BlogSwitcher = styled.div`
  width: ${theme.$blogWidth}px;
  margin-top: ${theme.$marginSection};
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid ${theme.$dividerColor};
  border-radius: 6px;
  text-align: left;
  cursor: pointer;
  div {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 18px;
  }
  &: hover {
    border: 1px solid ${theme.$themeColor};
  }
  @media (max-width: 800px) {
    width: ${theme.$padWidth}px;
  }
  @media (max-width: 500px) {
    width: ${theme.$mobileWidth}px;
  }
`;

type prevNextCardProps = {
  index: number;
};

const PrevNextCard = ({ index }: prevNextCardProps) => {
  return (
    <div>
      {index !== 0 ? (
        <BlogSwitcher
          onClick={() => {
            window.location.href = blogList[index - 1].href;
          }}
        >
          <div>
            <strong>Previous:</strong>
          </div>
          <div>{blogList[index - 1].title}</div>
        </BlogSwitcher>
      ) : (
        <div></div>
      )}
      {index !== blogList.length - 1 ? (
        <BlogSwitcher
          style={{ textAlign: 'right' }}
          onClick={() => {
            window.location.href = blogList[index + 1].href;
          }}
        >
          <div>
            <strong>Next:</strong>
          </div>
          <div>{blogList[index + 1].title}</div>
        </BlogSwitcher>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PrevNextCard;
