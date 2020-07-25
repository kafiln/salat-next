import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html {
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  transition: all 0.5s ease;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
    
  @media (max-width: 380px) {
    font-size: 0.6rem;
  }
}

`;

export default GlobalStyle;
