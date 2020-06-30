import LOCALES from '../locales';
import ENGLISH from '../messages/en';
import keys from './keys';

export default {
  [LOCALES.ARABIC.id]: {
    // Default to english when key not found
    ...ENGLISH[LOCALES.ENGLISH.id],

    // Settings

    [keys.MONTH]: 'الشهر',
    [keys.DAY]: 'الأيام',
    [keys.LIGHT]: 'لون فاتح',
    [keys.DARK]: 'لون غامق',
    [keys.SPINNER_LOADING]: '... جار التحميل',

    // Prayer names
    [keys.PRAYER_FAJR]: 'الفجر',
    [keys.PRAYER_CHOROUQ]: 'الشروق',
    [keys.PRAYER_DHUHR]: 'الظهر',
    [keys.PRAYER_ASR]: 'العصر',
    [keys.PRAYER_MAGHRIB]: 'المغرب',
    [keys.PRAYER_ISHAE]: 'العشاء',

    // Hijri Months names
    [keys.HIJRI_MONTH_1]: 'محرم',
    [keys.HIJRI_MONTH_2]: 'صفر',
    [keys.HIJRI_MONTH_3]: 'ربيع الأول',
    [keys.HIJRI_MONTH_4]: 'ربيع الثاني',
    [keys.HIJRI_MONTH_5]: 'جمادى الأولى',
    [keys.HIJRI_MONTH_6]: 'جمادى الثانية',
    [keys.HIJRI_MONTH_7]: 'رجب',
    [keys.HIJRI_MONTH_8]: 'شعبان',
    [keys.HIJRI_MONTH_9]: 'رمضان',
    [keys.HIJRI_MONTH_10]: 'شوّال',
    [keys.HIJRI_MONTH_11]: 'ذو القعدة',
    [keys.HIJRI_MONTH_12]: 'ذو الحجة',
  },
};
