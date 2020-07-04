import light from './light';

const dark = {
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

export default dark;
