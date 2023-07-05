import styled, { createGlobalStyle } from 'styled-components';
import {
  primaryColor,
  primaryDarkColor,
  errorColor,
  successColor,
} from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

 *{

  margin:0;
  padding:0;
  outline:none;
  box-sizing:border-box;
 }
 body{
   font-family: sans-serif;
   background: ${primaryDarkColor};
   color:${primaryColor};
 }
 html,body,#root{
  height:100%;
 }

 button{
  cursor:pointer;
  background:${primaryColor};
  border:none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: 150ms;
  transform-origin:top left;

  &:hover{
    padding:15px 25px;
  }
}
button{
  cursor:pointer;
  background:${primaryColor};
  border:none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: 150ms;
  transform-origin:top left;

  &:hover{
    padding:15px 25px;
  }
}

 a{
  text-decoration:none;
 }
 ul{
  list-style:none;
  background:${primaryColor};
 }


 body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background: #a70636;
  color: #ffffff;
;
 }
 body .Toastify .Toastify__toast-container .Toastify__toast--error{
  /* background: ${errorColor} */
  background: #a70636;
  color: #ffffff;
;
 }


`;

export const Container = styled.section`
  background-color: #ffffff;
  max-width: 450px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 2000px;
`;
