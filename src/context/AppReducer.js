import moment from "moment";
import { TIME_OFFSET } from "../settings";
import { CHANGE_CITY, CHANGE_LANGUAGE, CHANGE_PERIOD, CHANGE_THEME, DARK, ID, INITIAL_INIT, LANG, LIGHT, PERIODICITY, REFRESH_TIME, THEME } from "./types";

const withTime = (state) => {
  const time = moment.utc().utcOffset(TIME_OFFSET);
  return {
    ...state,
    time,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      localStorage.setItem(ID, action.payload);
      return {
        ...withTime(state),
        id: action.payload,
      };
    case INITIAL_INIT:
      return {
        ...withTime(state),
        id: action.payload.id || state.id,
        theme: action.payload.theme || state.theme,
        lang: action.payload.lang || state.lang,
        periodicity: action.payload.periodicity || state.periodicity,
      };
    case CHANGE_LANGUAGE:
      const lang = action.payload;
      localStorage.setItem(LANG, lang);
      return {
        ...withTime(state),
        lang,
      };
    case CHANGE_PERIOD:
      const periodicity = action.payload;
      localStorage.setItem(PERIODICITY, periodicity);
      return {
        ...withTime(state),
        periodicity,
      };
    case CHANGE_THEME:
      const theme = state.theme === LIGHT ? DARK : LIGHT;
      localStorage.setItem(THEME, theme);
      return {
        ...withTime(state),
        theme,
      };
    case REFRESH_TIME:
      return {
        ...withTime(state),
      };
    default:
      return state;
  }
};

export default reducer;
