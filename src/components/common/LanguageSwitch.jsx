import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AppContext } from '../../context/AppContext';
import { CHANGE_LANGUAGE } from '../../context/constants';
import { LOCALES as languages } from '../../i18n';
import { getClasses } from '../../themes';

function LanguageSwitch() {
  const { dispatch, lang } = useContext(AppContext);
  const otherLanguages = Object.values(languages).filter((e) => e.id !== lang);
  const { languageSwitch } = useContext(ThemeContext);

  const buttons = otherLanguages.map((language) => (
    <button
      key={language.id}
      className={`${getClasses(languageSwitch)} 
      ${language.id === lang && 'font-semibold underline'}
      border-0  mx-2 focus:outline-none rounded mt-4 md:mt-0`}
      onClick={() => dispatch({ type: CHANGE_LANGUAGE, payload: language.id })}
    >
      {language.displayName}
    </button>
  ));

  return <nav className="inline-flex items-center "> {buttons}</nav>;
}

export default LanguageSwitch;
