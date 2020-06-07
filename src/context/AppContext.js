import moment from "moment";
import React from "react";
import cities from "../../public/data/cities.json";
import { TIME_OFFSET } from "../settings";
import { DAILY, LIGHT } from "./types";

export const initialState = {
  cities, //FIXME: This should not be here
  languages: ["ar-ma", "fr-fr"], //FIXME: This should not be here
  time: moment().utcOffset(TIME_OFFSET),
  lang: "ar-ma",
  theme: LIGHT,
  periodicity: DAILY,
  slug: "casablanca",
};

export const AppContext = React.createContext(initialState);
