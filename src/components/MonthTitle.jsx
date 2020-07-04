import { useIntl } from 'react-intl';
import { Titling } from '../components/dsl';
import { KEYS } from '../i18n';

const MonthTitle = ({ city, month }) => {
  const { formatMessage } = useIntl();

  const title = formatMessage(
    {
      id: KEYS.MONTHLY_TITLE,
    },
    {
      month,
      city,
    }
  );

  const subTitle = formatMessage({
    id: KEYS.MONTHLY_SUBTITLE,
  });

  return <Titling title={title} subtitle={subTitle} />;
};

export default MonthTitle;
