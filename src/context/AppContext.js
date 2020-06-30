import React from 'react';
import { LOCALES } from '../i18n';
import { DAILY, LIGHT } from './types';

export const initialState = {
  lang: LOCALES.ARABIC.id,
  isRTL: true,
  theme: LIGHT,
  periodicity: DAILY,
  slug: 'casablanca',
};

export const AppContext = React.createContext(initialState);
