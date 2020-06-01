import moment from "moment";
import React from "react";
import cities from "../../public/data/cities.json";
import { TIME_OFFSET } from "../settings";

export const initialState = {
  cities,
  languages: ["ar-ma", "fr-fr"], //TODO: This should not be here
  time: moment().utcOffset(TIME_OFFSET),
  lang: "ar-ma",
  theme: "light",
  periodicity: "daily",
  id: 80,
};

export const AppContext = React.createContext(initialState);
