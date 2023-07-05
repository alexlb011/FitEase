import styled, { ThemedStyledProps } from 'styled-components';

export const Title = styled.h1`
  font-size: 50px;
  border-bottom: 1px solid;
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    margin-bottom: 15px;
    font-size: 18px;
    border: 1px solid;
    border-radius: 4px;
    transition: 150ms;
    padding: 0 10px;
    &:focus {
      border: 2px solid #c3073f;
      transform: scale(1.02);
    }
    &:active {
      transform: scale(1.1);
    }
  }
  button {
    margin-top: 50px;
  }
`;

// input {
//   padding: 0 10px;
//   height: 30px;
//   font-size: 16px;
//   border: 1px solid;
//   border-radius: 4px;
//   transition: 150ms;

//   &:focus {
//     border: 2px solid #c3073f;
//     transform: scale(1.02);
//   }
//   &:active {
//     transform: scale(1.1);
//   }
// }
