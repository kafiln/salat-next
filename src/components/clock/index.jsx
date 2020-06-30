import { FormattedDate } from 'react-intl';
import { TIMEZONE } from '../../settings';
import { H2, H3, Wrapper } from './styles';

const Clock = ({ displayTime = false, day, time, hijri }) => {
  return (
    <Wrapper>
      <H2>{hijri}</H2>
      <H2>
        <FormattedDate
          value={day}
          year="numeric"
          month="long"
          timeZone={TIMEZONE}
          day="numeric"
          weekday="long"
        ></FormattedDate>
      </H2>
      {displayTime && (
        <H3 suppressHydrationWarning>
          <FormattedDate
            value={time}
            hour="numeric"
            minute="numeric"
            second="numeric"
            timeZone="Africa/Casablanca"
          ></FormattedDate>
        </H3>
      )}
    </Wrapper>
  );
};

export default Clock;
