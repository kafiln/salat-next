import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CHANGE_LANGUAGE } from '../context/constants';
import { LOCALES as languages } from '../i18n';

function LanguageSwitch() {
  const { dispatch, lang } = useContext(AppContext);
  const otherLanguages = Object.values(languages).filter((e) => e.id !== lang);

  const buttons = otherLanguages.map((language) => (
    <button
      key={language.id}
      className="bg-gray-200 border-0 mx-2 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
      onClick={() => dispatch({ type: CHANGE_LANGUAGE, payload: language.id })}
    >
      {language.displayName}
    </button>
  ));

  return <nav className="inline-flex items-center "> {buttons}</nav>;
}

export default LanguageSwitch;
