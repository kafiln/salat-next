import { useIntl } from 'react-intl';
import { FullDate } from '../common';
import { TIMEZONE } from '../settings';

const Clock = ({ displayTime = false, today, time }) => {
  const { formatDate, formatTime } = useIntl();
  return (
    <div className="my-2">
      <FullDate today={today}>
        {(fullDate) => (
          <h2 className="text-center capitalize p-2">{fullDate}</h2>
        )}
      </FullDate>
      {displayTime && (
        <h3 suppressHydrationWarning className="text-center">
          {formatTime(time, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: TIMEZONE,
          })}
        </h3>
      )}
    </div>
  );
};

export default Clock;
