import {
  CHANGE_CITY,
  CHANGE_PERIOD,
  INITIAL_INIT,
  LANG,
  PERIODICITY,
  SLUG,
  THEME
} from './constants';

export const initState = dispatch => {
  const slug = localStorage.getItem(SLUG);
  const theme = localStorage.getItem(THEME);
  const lang = localStorage.getItem(LANG);
  const periodicity = localStorage.getItem(PERIODICITY);
  dispatch({
    type: INITIAL_INIT,
    payload: {
      slug,
      theme,
      lang,
      periodicity
    }
  });
};

export const updateCity = (dispatch, slug) => {
  dispatch({
    type: CHANGE_CITY,
    payload: slug
  });
};

export const updatePeriodicity = (dispatch, periodicity) => {
  dispatch({
    type: CHANGE_PERIOD,
    payload: periodicity
  });
};
