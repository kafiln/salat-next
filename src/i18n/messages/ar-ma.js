import LOCALES from '../locales';
import ENGLISH from '../messages/en';
import keys from './keys';

export default {
  [LOCALES.ARABIC.id]: {
    ...ENGLISH[LOCALES.ENGLISH.id], // Default to english when key not found
    [keys.MONTH]: 'الشهر',
    [keys.DAY]: 'اليوم',
    [keys.LIGHT]: 'لون فاتح',
    [keys.DARK]: 'لون غامق',
    [keys.SPINNER_LOADING]: '... جار التحميل',
    [keys.PRAYER_FAJR]: 'الفجر',
    [keys.PRAYER_CHOROUQ]: 'الشروق',
    [keys.PRAYER_DHUHR]: 'الظهر',
    [keys.PRAYER_ASR]: 'العصر',
    [keys.PRAYER_MAGHRIB]: 'المغرب',
    [keys.PRAYER_ISHAE]: 'العشاء',
  },
};
