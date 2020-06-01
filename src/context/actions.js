import { CHANGE_CITY, CHANGE_PERIOD, INITIAL_INIT } from "./types";

export const initState = (dispatch) => {
  const id = localStorage.getItem("id");
  const theme = localStorage.getItem("theme");
  const lang = localStorage.getItem("lang");
  const periodicity = localStorage.getItem("periodicity");
  dispatch({ type: INITIAL_INIT, payload: { id, theme, lang, periodicity } });
};

export const updateCity = (dispatch, id) => {
  dispatch({ type: CHANGE_CITY, payload: id });
};

export const updatePeriodicity = (dispatch, periodicity) => {
  dispatch({ type: CHANGE_PERIOD, payload: periodicity });
};
