import styled, { ThemedStyledProps } from 'styled-components';

export const Galeryx = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  h1 {
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #c3073f;
  }
`;
export const GaleryData = styled.div`
  display: block;
  padding: 10px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 5px;
    transition: 150ms;
    :hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  svg {
    margin: 10px;
    width: 100px;
    height: 100px;
    transition: 150ms;

    :hover {
      transform: rotateZ(-20deg) scale(1.2);
      cursor: pointer;
    }
  }
`;
