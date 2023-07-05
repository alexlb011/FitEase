import styled from 'styled-components';

export const Header = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  border-top: solid 2px;
  padding-top: 40px;
  padding-bottom: 20px;

  h1 {
    font-size: 32px;
  }

  button {
    margin-top: 25px;
    font-size: 20px;
  }
`;

export const PopUp = styled.div`
  position: fixed;
  top: 200px;
  left: 200px;
  max-width: 450px;
  width: 450px;
  background-color: white;
  border: solid 2px;
  z-index: 999;
  border-radius: 5px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  /* transform: translate(-100%, 0%); */

  h1 {
    border-bottom: solid 1px;
    margin-bottom: 15px;
  }

  iframe {
    margin-top: 50px;
    border: 2px solid;
    padding: 2px;
    width: 400px;
  }
  input {
    display: flex;
    width: 100%;
    padding: 5px;
  }
`;
export const TitlePop = styled.input`
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
`;

export const DescribePop = styled.textarea`
  padding: 15px;
  font-family: sans-serif;
  width: 100%;
  font-size: 15px;
  height: 150px;
`;

export const Tdinc = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  font-weight: bold;
  display: flex;
  :hover {
    background-color: #ff000021;
    cursor: pointer;
  }
  button {
    inherits: false;
    padding: 5px;
  }
  p {
    padding: 5px;
  }
`;

export const FooterData = styled.div`
  display: flex;
  align-items: center;
  div {
    padding: 15px;
  }
`;
export const ButtonSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;

  button {
    margin: 15px;
  }
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
export const FieldData = styled.div`
  padding-top: 15px;
  font-weight: bold;
  text-align: left;
`;
export const SchoolData = styled.div`
  margin-top: 25px;
  font-weight: bold;
  text-align: left;
`;

/// sssssssssssssssssPopUp

export const TableStyle = styled.table`
  /* border-collapse: collapse; */
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  font-size: 14px;

  h1 {
    text-align: left;
    font-size: 22px;
    margin-bottom: 15px;
    border-bottom: solid 1px red;
  }
`;

export const Th = styled.th`
  border: 1px solid rgb(188, 188, 188);
  /* padding: 8px; */
  width: 50px;
  font-weight: bold;
  padding-bottom: 25px;
`;
export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 4px;
  font-weight: bold;
`;

export const Slot = styled.div`
  border: solid 5px #c3073f;
  margin-top: 20px;
  margin-bottom: 20px;
  h1 {
    padding: 15px;
  }
  input {
    width: 100%;
    font-weight: bold;
    color: #191919;
  }
`;
export const InputTitle = styled.input`
  max-width: 75%;
  margin: 15px;
  font-weight: bold;
  font-size: 25px;
`;

export const ButtonInput = styled.button`
  width: 80%;
  margin: 15px;
`;
