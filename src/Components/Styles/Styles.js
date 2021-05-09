import styled, { createGlobalStyle } from 'styled-components';

const theme = {
  white: '#fff',
  ligthGrey: '#E5E5E5',
  midLigthGrey: '#F7F8FA',
  lightPurple: '#a8f',
  darkPurple: '#8e62fd',
};
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${theme.midLigthGrey};
`;

const Card = styled.div`
  width: 25rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid ${theme.ligthGrey};
  background: ${theme.white};
`;

const Button = styled.button`
  background: ${theme.lightPurple};
  color: ${theme.white};
  width: 100%;
  padding: 0.6rem;
  font-size: 1.2rem;
  border: 2px solid ${theme.darkPurple};
  border-radius: 0.2rem;
  margin: 1rem 0;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Form = styled.form``;
const FormControl = styled.div`
  margin-bottom: 0.4rem;
`;

const Label = styled.label`
  display: inline-block;
  width: 100%;
  margin-bottom: 0.2rem;
`;

const InputField = styled.input`
  font-size: 1.2rem;
  width: 100%;
  padding: 0.6rem;
  border: 1px solid ${theme.ligthGrey};
  border-radius: 0.2rem;
`;
const Error = styled.span`
  color: red;
`;

export {
  GlobalStyle,
  Container,
  Card,
  Form,
  FormControl,
  Label,
  InputField,
  Error,
  Button,
};
