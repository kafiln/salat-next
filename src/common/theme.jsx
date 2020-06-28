import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CHANGE_THEME, DARK } from '../context/types';
import Emoji from './emoji';

const Theme = () => {
  const { dispatch, theme } = useContext(AppContext);

  const toggleTheme = () => dispatch({ type: CHANGE_THEME });
  return (
    <div
      className="bg-gray-200 rounded-full cursor-pointer border-0 mx-2 py-1 px-3 focus:outline-none hover:bg-gray-300  text-base mt-4 md:mt-0"
      onClick={toggleTheme}
    >
      {theme === DARK ? (
        <Emoji name="sun" icon="🌞" />
      ) : (
        <Emoji name="moon" icon="🌙" />
      )}
    </div>
  );
};

export default Theme;
