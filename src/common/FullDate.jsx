import { useIntl } from 'react-intl';
import { KEYS } from '../i18n';

function FullDate({ today, children }) {
  const { formatDate, formatMessage } = useIntl();
  const currentHijriMonth = formatMessage({
    id: `HIJRI_MONTH_${today.hijri.month}`,
  });

  const georgian = formatMessage(
    { id: KEYS.GEORGIAN_DATE },
    {
      day: new Date(today.day).getDate(),
      month: formatDate(today.day, { month: 'long' }),
      year: new Date(today.day).getFullYear(),
    }
  );

  const hijri = formatMessage(
    { id: KEYS.FULL_DATE },
    {
      day: formatDate(new Date(), { weekday: 'long' }),
      date: today.hijri.day,
      month: currentHijriMonth,
      year: today.hijri.year,
      georgian,
    }
  );

  return children(hijri);
}

export default FullDate;
