import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AppContext } from '../../context/AppContext';
import { CHANGE_LANGUAGE } from '../../context/constants';
import { LOCALES as languages } from '../../i18n';
import { getClasses } from '../../styles';
import { Text } from '../dsl';

function LanguageSwitch() {
  const { dispatch, lang } = useContext(AppContext);
  const otherLanguages = Object.values(languages).filter(e => e.id !== lang);
  const { languageSwitch } = useContext(ThemeContext);

  const buttons = otherLanguages.map(language => (
    <Text
      key={language.id}
      className={`${getClasses(languageSwitch)} 
      cursor-pointer mx-2`}
      onClick={() => dispatch({ type: CHANGE_LANGUAGE, payload: language.id })}
    >
      {language.displayName}
    </Text>
  ));

  return (
    <nav className="flex items-center justify-center h-full"> {buttons}</nav>
  );
}

export default LanguageSwitch;
