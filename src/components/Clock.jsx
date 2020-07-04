import { useIntl } from 'react-intl';
import { FullDate } from '../components/common';
import { Titling } from '../components/dsl';
import { TIMEZONE } from '../settings';

const Clock = ({ today, displayTime = false, time }) => {
  const { formatTime } = useIntl();
  const formattedTime = formatTime(time, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: TIMEZONE,
  });
  return (
    <FullDate today={today}>
      {(fullDate) => (
        <Titling
          className="capitalize"
          title={fullDate}
          subtitle={displayTime && formattedTime}
        ></Titling>
      )}
    </FullDate>
  );
};

export default Clock;
