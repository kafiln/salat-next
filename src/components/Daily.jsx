import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { ThemeContext } from 'styled-components';
import { Spinner } from '../components/common';
import { AppContext } from '../context/';
import { useTime } from '../hooks';
import { DEFAULT_TIME_FORMAT } from '../settings';
import Clock from './Clock';
import PrayerList from './PrayerList';
import TimeCard from './TimeCard';

const Daily = ({ prayers }) => {
  const { isRTL } = useContext(AppContext);
  const theme = useContext(ThemeContext);
  const { formatMessage } = useIntl();

  let prayer = (prayers || [])[0];

  let names = {};
  Object.keys(prayer)
    .splice(0, 6)
    .forEach((name) => {
      names[name] = formatMessage({ id: `PRAYER_${name.toUpperCase()}` });
    });

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

  return next ? (
    <>
      <Clock time={time} today={prayer} />
      <div className="flex">
        <div className="w-1/4 rounded-lg hidden sm:flex">
          <img className="rounded-md" src="/images/mosque-1.jpg" alt="Mosque" />
        </div>
        <div className="sm:mx-4 w-full sm:w-3/4 mx-auto">
          <TimeCard
            time={prayer[next]}
            remaining={diff}
            name={names[next]}
            isRTL={isRTL}
          />

          <PrayerList data={prayer} next={next} names={names} isRTL={isRTL} />
        </div>
      </div>
    </>
  ) : (
    <Spinner />
  );
};

export default Daily;
