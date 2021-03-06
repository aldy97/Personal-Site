import React from 'react';
import theme from '../theme/theme';
import styled from 'styled-components';

type ImgHolderProps = {
  width?: number;
  height?: number;
  mobileHeight?: number;
  padHeight?: number;
  src: any;
};

const StyledImgHolder = styled.div<ImgHolderProps>`
  margin-left: auto;
  margin-right: auto;
  width: ${(props) =>
    props.width ? `${props.width}px` : `${theme.$blogWidth}px`};
  height: ${(props) => (props.height ? `${props.height}px` : '')};
  margin-bottom: ${theme.$marginPic};
  margin-top: ${theme.$marginPic};
  img {
    width: ${(props) =>
      props.width ? `${props.width}px` : `${theme.$blogWidth}px`};
    height: ${(props) => (props.height ? `${props.height}px` : '')};
  }
  @media (max-width: 800px) {
    width: ${theme.$padWidth}px;
    height: ${(props) => (props.padHeight ? `${props.padHeight}px` : '')};
    img {
      width: ${theme.$padWidth}px;
      height: ${(props) => (props.padHeight ? `${props.padHeight}px` : '')};
    }
  }
  @media (max-width: 500px) {
    width: ${theme.$mobileWidth}px;
    height: ${(props) =>
      props.mobileHeight ? `${props.mobileHeight}px` : '180px'};
    img {
      width: ${theme.$mobileWidth}px;
      height: ${(props) =>
        props.mobileHeight ? `${props.mobileHeight}px` : '180px'};
    }
  }
`;

const ImgHolder = ({
  width,
  height,
  mobileHeight,
  padHeight,
  src,
}: ImgHolderProps) => {
  return (
    <StyledImgHolder
      width={width}
      height={height}
      mobileHeight={mobileHeight}
      padHeight={padHeight}
      src={src}
    >
      <img alt='' src={src}></img>
    </StyledImgHolder>
  );
};

export default ImgHolder;
