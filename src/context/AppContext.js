import moment from 'moment';
import React from 'react';
import cities from '../data/cities.json';
import { TIME_OFFSET } from '../settings';

export const initialState = {
  cities,
  id: parseInt( '80'),
  lang:  'fr-fr',
  languages: ['ar-ma', 'fr-fr'], //TODO: This should not be here
  time: moment().utcOffset(TIME_OFFSET),
  theme:  'light',
  periodicity:  'daily',
};

export const AppContext = React.createContext(initialState);
