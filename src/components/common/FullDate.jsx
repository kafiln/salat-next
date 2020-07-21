import { useIntl } from 'react-intl';
import { KEYS } from '../../i18n';
import { localTime } from '../../utils';

function FullDate({ today, children }) {
  const { formatDate, formatMessage } = useIntl();
  const currentHijriMonth = formatMessage({
    id: `HIJRI_MONTH_${today.hijri.month}`
  });

  const georgian = formatMessage(
    { id: KEYS.GEORGIAN_DATE },
    {
      day: localTime(today.day).date(),
      month: formatDate(today.day, { month: 'long' }),
      year: localTime(today.day).year()
    }
  );

  const hijri = formatMessage(
    { id: KEYS.FULL_DATE },
    {
      day: formatDate(localTime(), { weekday: 'long' }),
      date: today.hijri.day,
      month: currentHijriMonth,
      year: today.hijri.year,
      georgian
    }
  );

  return children(hijri);
}

export default FullDate;
