import LOCALES from '../locales';
import ENGLISH from '../messages/en';
import KEYS from './keys';

export default {
  [LOCALES.ARABIC.id]: {
    // Default to english when key not found
    ...ENGLISH[LOCALES.ENGLISH.id],

    // Settings
    [KEYS.MONTH]: 'الشهر',
    [KEYS.DAY]: 'الأيام',
    [KEYS.LIGHT]: 'لون فاتح',
    [KEYS.DARK]: 'لون غامق',
    [KEYS.SPINNER_LOADING]: '... جار التحميل',

    // Navigation:
    [KEYS.DAILY]: 'الأوقات اليوم',
    [KEYS.MONTHLY]: 'الحصة الشهرية',

    // Prayer names
    [KEYS.PRAYER_FAJR]: 'الفجر',
    [KEYS.PRAYER_CHOROUQ]: 'الشروق',
    [KEYS.PRAYER_DHUHR]: 'الظهر',
    [KEYS.PRAYER_ASR]: 'العصر',
    [KEYS.PRAYER_MAGHRIB]: 'المغرب',
    [KEYS.PRAYER_ISHAE]: 'العشاء',

    // Hijri Months names
    [KEYS.HIJRI_MONTH_1]: 'محرم',
    [KEYS.HIJRI_MONTH_2]: 'صفر',
    [KEYS.HIJRI_MONTH_3]: 'ربيع الأول',
    [KEYS.HIJRI_MONTH_4]: 'ربيع الثاني',
    [KEYS.HIJRI_MONTH_5]: 'جمادى الأولى',
    [KEYS.HIJRI_MONTH_6]: 'جمادى الثانية',
    [KEYS.HIJRI_MONTH_7]: 'رجب',
    [KEYS.HIJRI_MONTH_8]: 'شعبان',
    [KEYS.HIJRI_MONTH_9]: 'رمضان',
    [KEYS.HIJRI_MONTH_10]: 'شوّال',
    [KEYS.HIJRI_MONTH_11]: 'ذو القعدة',
    [KEYS.HIJRI_MONTH_12]: 'ذو الحجة',

    [KEYS.MONTHLY_TITLE]: 'مواقيت الصلاة لشهر {month} بمدينة {city}',
    [KEYS.MONTHLY_SUBTITLE]:
      'حسب توقيت وزارة الاوقاف والشؤون الاسلامية بالمغرب',
    [KEYS.FULL_DATE]: '{day} {date} {month} {year}هــ {georgian}',
    [KEYS.GEORGIAN_DATE]: 'الموافق لـ {day} {month} {year}'
  }
};
