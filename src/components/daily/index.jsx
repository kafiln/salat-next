import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ThemeContext } from 'styled-components';
import Spinner from '../../common/spinner';
import { AppContext } from '../../context/AppContext';
import { useTime } from '../../hooks/useTime';
import { DEFAULT_TIME_FORMAT } from '../../settings';
import { parseTime } from '../../utils/dates';
import Clock from '../clock';
import { Li, Ul } from './styles';

const Daily = ({ prayers, date }) => {
  const { lang, isRTL } = useContext(AppContext);
  const theme = useContext(ThemeContext);

  let prayer = (prayers || [])[0];

  const NAMES = Object.keys(prayer).splice(0, 6);

  const [state, setState] = useState({});
  const time = useTime();

  useEffect(() => {
    if (prayer) {
      const nextOnes = Object.keys(prayer).filter((t) =>
        time.utc().isBefore(moment.utc(prayer[t]))
      );
      const next = nextOnes.length === 0 ? Object.keys(NAMES)[0] : nextOnes[0];
      const diff = moment
        .utc(moment.utc(prayer[next]).diff(time.utc()))
        .format(DEFAULT_TIME_FORMAT);
      setState({ next, diff });
    }
  }, [prayer, time]);

  const { next, diff } = state;

  return prayer ? (
    <>
      <Clock displayTime time={time} day={prayer.day} hijri={date} />

      <Ul>
        {NAMES.map((name) => {
          return (
            <Li key={name} isRTL={isRTL} className={name === next ? 'next' : ''}>
              <div>
                <FormattedMessage
                  id={`PRAYER_${name.toUpperCase()}`}
                ></FormattedMessage>
              </div>
              {name === next && (
                <div className={`${theme.daily.difference}`}>{diff}</div>
              )}
              <div>{parseTime(prayer[name])}</div>
            </Li>
          );
        })}
      </Ul>
    </>
  ) : (
    <Spinner />
  );
};
export default Daily;
