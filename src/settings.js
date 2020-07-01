import { LANG, PERIODICITY, SLUG, THEME } from './context/constants';

export const DEFAULT_TIME_FORMAT = 'HH:mm:ss';
export const DEFAULT_DATE_FORMAT = 'dddd LL';

export const NEVER_REMOVE_FROM_STORAGE = [SLUG, LANG, THEME, PERIODICITY];

export const TIME_OFFSET = 1;
export const HIJRI_YEAR = 1441;
export const TIMEZONE = 'Africa/Casablanca';

export const API_URL = 'https://salat-native.herokuapp.com/';
