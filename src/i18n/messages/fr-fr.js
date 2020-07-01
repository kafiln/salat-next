import LOCALES from '../locales';
import ENGLISH from '../messages/en';
import KEYS from './keys';
export default {
  [LOCALES.FRENCH.id]: {
    ...ENGLISH[LOCALES.ENGLISH.id],
    [KEYS.MONTH]: 'Mois',
    [KEYS.DAY]: 'Jour',
    [KEYS.LIGHT]: 'Clair',
    [KEYS.DARK]: 'Sombre',
    [KEYS.SPINNER_LOADING]: 'Chargement en cours ...',

    [KEYS.MONTHLY_TITLE]:
      'Horaires de prières pour le mois de {month} à {city} selon le ministère des habous et des affaires islamiques',
  },
};
