import { createGlobalStyle } from 'styled-components';

export const light = {
  color: 'black',
  backgroundColor: 'white',
  themeToggle: {
    bgColor: 'bg-white',
    hoverBgColor: 'hover:bg-gray-300',
  },
  languageSwitch: {
    // textColor: 'text-black',
    // bgColor: 'bg-gray-300',
    // hoverBgColor: 'hover:bg-gray-400',
  },
  daily: {
    difference: 'text-red-500',
  },
};

export const dark = {
  // default to light theme
  ...light,
  color: 'white',
  backgroundColor: '#0b1049',
  themeToggle: {
    // bgColor: 'bg-white',
    // hoverBgColor: 'hover:bg-gray-300',
  },
  languageSwitch: {
    // textColor: 'text-white',
    // bgColor: 'bg-gray-900',
    // hoverBgColor: 'hover:bg-gray-800',
  },
  daily: {
    difference: 'text-red-600',
  },
};

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  transition: all .5s ease;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
}
`;

/**
 *
 *
 * @param {*} element
 */
export const getClasses = (element) => Object.values(element).join(' ');
