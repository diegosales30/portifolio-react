import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  :root{
    --primary: #f0faff;
    --secondary: #F7FDFF;
    --tertiary: #1f2223;
    --quaternary: #2C3032;
    --quinary: #000;
    --senary: #1f2023;
    
  }
  body{
    font-family: 'Inter', sans-serif;
    background-color: var(--quinary);
    
    
    
    
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    
    
  }

  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  `;
