import { useIntl } from 'react-intl';
import { TIMEZONE } from '../settings';

const Clock = ({ displayTime = false, day, time, hijri }) => {
  const { formatDate, formatTime } = useIntl();
  return (
    <div className="my-2">
      <h2 className="text-center capitalize p-2">{hijri}</h2>
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
