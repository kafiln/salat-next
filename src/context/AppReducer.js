import { isRTL } from '../i18n';
import {
  CHANGE_CITY,
  CHANGE_LANGUAGE,
  CHANGE_PERIOD,
  CHANGE_THEME,
  DARK,
  INITIAL_INIT,
  LANG,
  LIGHT,
  PERIODICITY,
  SLUG,
  THEME
} from './constants';

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      localStorage.setItem(SLUG, action.payload);
      return {
        ...state,
        slug: action.payload
      };
    case INITIAL_INIT:
      const language = action.payload.lang || state.lang;
      return {
        ...state,
        slug: action.payload.slug || state.slug,
        theme: action.payload.theme || state.theme,
        lang: language,
        periodicity: action.payload.periodicity || state.periodicity,
        isRTL: isRTL(language)
      };
    case CHANGE_LANGUAGE:
      const lang = action.payload;
      localStorage.setItem(LANG, lang);
      return {
        ...state,
        lang,
        isRTL: isRTL(lang)
      };
    case CHANGE_PERIOD:
      const periodicity = action.payload;
      localStorage.setItem(PERIODICITY, periodicity);
      return {
        ...state,
        periodicity
      };
    case CHANGE_THEME:
      const theme = state.theme === LIGHT ? DARK : LIGHT;
      localStorage.setItem(THEME, theme);
      return {
        ...state,
        theme
      };
    default:
      return state;
  }
};

export default reducer;
