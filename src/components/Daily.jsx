import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ThemeContext } from 'styled-components';
import { Spinner } from '../components/common';
import { AppContext } from '../context/';
import { useTime } from '../hooks';
import { DEFAULT_TIME_FORMAT } from '../settings';
import { parseTime } from '../utils/dates';
import Clock from './Clock';

const Daily = ({ prayers, date }) => {
  const { isRTL } = useContext(AppContext);
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
      const next = nextOnes.length === 0 ? NAMES[0] : nextOnes[0];
      const diff = moment
        .utc(moment.utc(prayer[next]).diff(time.utc()))
        .format(DEFAULT_TIME_FORMAT);
      setState({ next, diff });
    }
  }, [prayer, time]);

  const { next, diff } = state;

  return prayer ? (
    <>
      <Clock displayTime time={time} today={prayer} />

      <ul className="flex flex-col justify-between mx-auto w-2/3">
        {NAMES.map((name) => {
          return (
            <li
              key={name}
              className={`my-2 p-2 flex justify-between ${
                name === next &&
                'font-semibold text-gray-900 bg-gray-200 rounded'
              } ${isRTL && 'flex-row-reverse'}`}
            >
              <div>
                <FormattedMessage
                  id={`PRAYER_${name.toUpperCase()}`}
                ></FormattedMessage>
              </div>
              {name === next && (
                <div className={`${theme.daily.difference}`}>{diff}</div>
              )}
              <div>{parseTime(prayer[name])}</div>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <Spinner />
  );
};
export default Daily;
