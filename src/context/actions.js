import { CHANGE_CITY, CHANGE_PERIOD, ID, INITIAL_INIT, LANG, PERIODICITY, THEME } from "./types";

export const initState = (dispatch) => {
  const id = localStorage.getItem(ID);
  const theme = localStorage.getItem(THEME);
  const lang = localStorage.getItem(LANG);
  const periodicity = localStorage.getItem(PERIODICITY);
  dispatch({
    type: INITIAL_INIT,
    payload: {
      id,
      theme,
      lang,
      periodicity,
    },
  });
};

export const updateRoutes = (dispatch, payload) => {
  dispatch({
    type: CHANGE_ROUTES,
    payload,
  });
};
export const updateCity = (dispatch, id) => {
  dispatch({
    type: CHANGE_CITY,
    payload: id
  });
};

export const updatePeriodicity = (dispatch, periodicity) => {
  dispatch({
    type: CHANGE_PERIOD,
    payload: periodicity
  });
};
