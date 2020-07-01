import LOCALES from '../locales';
import KEYS from './keys';
export default {
  [LOCALES.ENGLISH.id]: {
    // Settings
    [KEYS.MONTH]: 'Month',
    [KEYS.DAY]: 'Day',
    [KEYS.LIGHT]: 'Light',
    [KEYS.DARK]: 'Dark',
    [KEYS.SPINNER_LOADING]: 'Loading ...',

    // Prayer names
    [KEYS.PRAYER_FAJR]: 'Fajr',
    [KEYS.PRAYER_CHOROUQ]: 'Chorouq',
    [KEYS.PRAYER_DHUHR]: 'Dhuhr',
    [KEYS.PRAYER_ASR]: 'Asr',
    [KEYS.PRAYER_MAGHRIB]: 'Maghrib',
    [KEYS.PRAYER_ISHAE]: 'Ishae',

    // Hijri Months names
    [KEYS.HIJRI_MONTH_1]: 'Mouharram',
    [KEYS.HIJRI_MONTH_2]: 'Safar',
    [KEYS.HIJRI_MONTH_3]: 'Rabiâ Al Awwal',
    [KEYS.HIJRI_MONTH_4]: 'Rabiâ Atthani',
    [KEYS.HIJRI_MONTH_5]: 'Joumada Al Oulah',
    [KEYS.HIJRI_MONTH_6]: 'Joumada Atthaniah',
    [KEYS.HIJRI_MONTH_7]: 'Rajab',
    [KEYS.HIJRI_MONTH_8]: 'Shaâban',
    [KEYS.HIJRI_MONTH_9]: 'Ramadan',
    [KEYS.HIJRI_MONTH_10]: 'Shawwal',
    [KEYS.HIJRI_MONTH_11]: 'Thul Qiâdah',
    [KEYS.HIJRI_MONTH_12]: 'Thul Hijjah',
    [KEYS.MONTHLY_TITLE]: 'Prayers times for {month} in {city}',
    [KEYS.MONTHLY_SUBTITLE]:
      'According to the ministry of Habous and Islamic Affairs in Morocco',
    [KEYS.FULL_DATE]: '{day}, {date} {month} {year} / {georgian}',
    [KEYS.GEORGIAN_DATE]: '{day} {month} {year}',
  },
};
