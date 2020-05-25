import { INITIAL_INIT } from "./types";

export const initState = (dispatch) => {
  const id = localStorage.getItem("id") || 80;
  const theme = localStorage.getItem("theme") || "light";
  const lang = localStorage.getItem("lang") || "ar-ar";
  const periodicity = localStorage.getItem("periodicity") || "daily";
  dispatch({ type: INITIAL_INIT, payload: { id, theme, lang, periodicity } });
};
