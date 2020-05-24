import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
  background-color: ${(props) => props.theme.backgroundColor} !important;
  color: ${(props) => props.theme.color} !important;
}

#root {
  color: ${(props) => props.theme.color};
  width: 75vw;
  height:100vh;
  margin: auto;
}
`;

export const dark = {
  color: 'white',
  backgroundColor: 'black',
  differenceColor: '#f32222',
};

export const light = {
  color: 'black',
  backgroundColor: 'white',
  differenceColor: '#ec8b8b',
};
