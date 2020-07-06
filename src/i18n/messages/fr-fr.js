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

    // Navigation:
    [KEYS.DAILY]: "Aujourd'hui",
    [KEYS.MONTHLY]: 'Ce Mois',

    [KEYS.MONTHLY_TITLE]:
      'Horaires de prières pour le mois de {month} à {city} ',
    [KEYS.MONTHLY_SUBTITLE]:
      'Selon le ministère des habous et des affaires islamiques au Maroc'
  }
};
