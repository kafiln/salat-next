import React from 'react';
import { LOCALES } from '../i18n';
import { DAILY, LIGHT } from './constants';

export const initialState = {
  lang: LOCALES.ENGLISH.id,
  theme: LIGHT,
  periodicity: DAILY,
  slug: 'casablanca',
  isRTL: false
};

export const AppContext = React.createContext(initialState);
