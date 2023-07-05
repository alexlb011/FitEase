import styled, { ThemedStyledProps } from 'styled-components';

interface ITitleProps
  extends ThemedStyledProps<React.HTMLAttributes<HTMLHeadingElement>, any> {
  isRed?: boolean;
}

export const TitileHead = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid;
  padding-bottom: 15px;
`;

export const Title = styled.h1<ITitleProps>`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};

  small {
    font-size: 12pt;
    margin-left: 15px;
    color: black;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0px 10px 0px;

  input {
    margin-right: 15px;
    padding: 0 10px;
    height: 36px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 4px;
    transition: 150ms;

    &:focus {
      border: 2px solid #c3073f;
      transform: scale(1.02);
    }
    &:active {
      transform: scale(1.1);
    }
  }
`;

export const NewStudent = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  margin-top: 20px;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;
export const AlunoIndex = styled.div``;
export const AlunoContainer = styled.div`
  margin-top: 50px;
  div {
    padding-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    align-items: center;
  }
  .AlunoID {
    display: flex;
    justify-content: left;
  }

  .AlunoID + .AlunoID {
    border-top: 1px solid;
  }
`;
export const ProfilePicture = styled.div`
  display: flex;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  svg {
    width: 150px;
    height: 150px;
    color: #c3073f;
  }
`;
export const StudentData = styled.div`
  span {
    padding-top: 5px;
    display: flex;
    align-items: center;
    justify-content: left;
  }
`;

export const StudentManagerLink = styled.div`
  a {
    padding-right: 10px;
  }
  svg {
    width: 20px;
    height: 20px;
    color: #9f2b36;
    transition: 150ms;
    :hover {
      transform: scale(1.4);
      color: #c00013;
    }
  }
`;
