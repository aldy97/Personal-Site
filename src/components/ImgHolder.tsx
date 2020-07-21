import theme from '../theme/theme';
import styled from 'styled-components';

type ImgHolderProps = {
  width?: number;
  height?: number;
  mobileHeight?: number;
};

const ImgHolder = styled.div<ImgHolderProps>`
  width: ${(props) => (props.width ? `${props.width}px` : theme.$blogWidth)};
  height: ${(props) => (props.height ? `${props.height}px` : '')};
  margin-bottom: ${theme.$marginPic};
  margin-top: ${theme.$marginPic};
  img {
    width: ${(props) => (props.width ? `${props.width}px` : theme.$blogWidth)};
    height: ${(props) => (props.height ? `${props.height}px` : '')};
  }
  @media (max-width: 500px) {
    width: ${theme.$mobileWidth};
    height: ${(props) =>
      props.mobileHeight ? `${props.mobileHeight}px` : '180px'};
    img {
      width: ${theme.$mobileWidth};
      height: ${(props) =>
        props.mobileHeight ? `${props.mobileHeight}px` : '180px'};
    }
  }
`;

export default ImgHolder;
