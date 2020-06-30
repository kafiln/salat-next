import LOCALES from '../locales';
import ENGLISH from '../messages/en';
import keys from './keys';
export default {
  [LOCALES.FRENCH.id]: {
    ...ENGLISH[LOCALES.ENGLISH.id],
    [keys.MONTH]: 'Mois',
    [keys.DAY]: 'Jour',
    [keys.LIGHT]: 'Clair',
    [keys.DARK]: 'Sombre',
    [keys.SPINNER_LOADING]: 'Chargement en cours ...',
  },
};
