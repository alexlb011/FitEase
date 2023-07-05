import styled from 'styled-components';

export const TitleHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    width: 200px;
    height: 200px;
    :hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: 150ms;

    :hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }

  h1 {
    padding-top: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #c3073f;
    width: 100%;
    text-align: center;
  }
`;
