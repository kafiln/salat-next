import moment from 'moment';
import { useRef } from 'react';
import { FormattedDate, useIntl } from 'react-intl';
import useInterval from '../../hooks/useInterval';
import { H2, H3, Wrapper } from './styles';
const Clock = ({ displayTime = false }) => {
  const timeRef = useRef(moment());
  const intl = useIntl();
  const timeFormat = () =>
    intl.formatTime(moment(), {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Africa/Casablanca',
    });

  const setRef = (ref) => (ref.current.textContent = timeFormat());

  useInterval(() => setRef(timeRef), 1000);

  return (
    <Wrapper>
      <H2>
        <FormattedDate
          value={moment()}
          year="numeric"
          month="long"
          timeZone="Africa/Casablanca"
          day="numeric"
          weekday="long"
        ></FormattedDate>
      </H2>
      {displayTime && (
        <H3 suppressHydrationWarning ref={timeRef}>
          {timeFormat()}
        </H3>
      )}
    </Wrapper>
  );
};

export default Clock;
