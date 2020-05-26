import { CHANGE_CITY, CHANGE_PERIOD, INITIAL_INIT } from "./types";

export const initState = (dispatch) => {
  const id = localStorage.getItem("id") || 80;
  const theme = localStorage.getItem("theme") || "light";
  const lang = localStorage.getItem("lang") || "ar-ma";
  const periodicity = localStorage.getItem("periodicity") || "daily";
  dispatch({ type: INITIAL_INIT, payload: { id, theme, lang, periodicity } });
};

export const updateCity = (dispatch, id) => {
  dispatch({ type: CHANGE_CITY, payload: id });
};

export const updatePeriodicity = (dispatch, periodicity) => {
  dispatch({ type: CHANGE_PERIOD, payload: periodicity });
};
