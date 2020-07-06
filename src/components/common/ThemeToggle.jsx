import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import { AppContext } from '../../context/AppContext';
import { CHANGE_THEME, DARK } from '../../context/constants';
import { getClasses } from '../../styles';

const ThemeToggle = () => {
  const { dispatch, theme } = useContext(AppContext);
  const { themeToggle } = useContext(ThemeContext);

  const toggleTheme = () => dispatch({ type: CHANGE_THEME });
  return (
    <div
      className={`${getClasses(
        themeToggle
      )} p-2 cursor-pointer  border border-gray-500 focus:outline-none rounded-full`}
      onClick={toggleTheme}
    >
      {theme === DARK ? (
        <FaSun size="1.5em" color={`${themeToggle.icon}`} />
      ) : (
        <FaMoon size="1.5em" color={`${themeToggle.icon}`} />
      )}
    </div>
  );
};

export default ThemeToggle;