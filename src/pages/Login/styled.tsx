import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #ffffff;
  max-width: 450px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom: 1px solid;
`;
export const LoginStyle = styled.div`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid;
  margin-bottom: 50px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.15);
`;
export const RegisterStyle = styled.div`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.15);
`;
export const Form = styled.form`
  padding-top: 15px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;

  label + button {
    margin-top: 50px;
  }

  label {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    font-weight: bold;

    input {
      padding: 0 10px;
      height: 30px;
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
  }
`;
