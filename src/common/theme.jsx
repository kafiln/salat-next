import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CHANGE_THEME, DARK, LIGHT } from "../context/types";

function Theme() {
  const { dispatch, theme } = useContext(AppContext);
  const themes = [DARK, LIGHT];
  const availableTheme = themes.filter((t) => t !== theme)[0];

  const toggleTheme = () => dispatch({ type: CHANGE_THEME });
  return (
    <div
      className="bg-gray-200 capitalize cursor-pointer border-0 mx-2 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
      onClick={toggleTheme}
    >
      {availableTheme.toLowerCase()}
    </div>
  );
}

export default Theme;
