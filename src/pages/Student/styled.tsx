import styled, { ThemedStyledProps } from 'styled-components';

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
  }
  h1 {
    padding-top: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #c3073f;
    width: 100%;
    text-align: center;
  }
`;

export const PersonalData = styled.div``;
export const FieldData = styled.div`
  padding-top: 15px;
  font-weight: bold;
  text-align: left;
  border-bottom: 1px dashed #c3073f42;
`;
export const SchoolData = styled.div`
  padding-top: 50px;
  margin-top: 25px;

  font-weight: bold;
  text-align: left;
  border-top: 1px solid #c3073f;
`;

export const ClassData = styled.div`
  padding: 15px;
  margin-top: 25px;

  font-weight: bold;
  text-align: left;
  border: 1px solid #c3073f;
  border-radius: 8px;
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  button {
    margin-top: 20px;
  }
`;

export const Galery = styled.div`
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
