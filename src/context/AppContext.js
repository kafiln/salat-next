import React from 'react';
import { LOCALES } from '../i18n';
import { DAILY, LIGHT } from './constants';

export const initialState = {
  lang: LOCALES.ARABIC.id,
  theme: LIGHT,
  periodicity: DAILY,
  slug: 'casablanca',
  isRTL: true
};

export const AppContext = React.createContext(initialState);
