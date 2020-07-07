import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Spinner } from '../components/common';
import { AppContext } from '../context/';
import { useTime } from '../hooks';
import { DEFAULT_TIME_FORMAT } from '../settings';
import PrayerList from './PrayerList';
import TimeCard from './TimeCard';

const Daily = ({ prayer }) => {
  const { isRTL } = useContext(AppContext);
  const { formatMessage } = useIntl();

  let names = {};
  Object.keys(prayer)
    .splice(0, 6)
    .forEach(name => {
      names[name] = formatMessage({ id: `PRAYER_${name.toUpperCase()}` });
    });

  const [state, setState] = useState({});
  const time = useTime();

  useEffect(() => {
    if (prayer) {
      const nextOnes = Object.keys(prayer).filter(t =>
        time.utc().isBefore(moment.utc(prayer[t]))
      );
      const next = nextOnes.length === 0 ? Object.keys(names)[0] : nextOnes[0];
      const diff = moment
        .utc(moment.utc(prayer[next]).diff(time.utc()))
        .format(DEFAULT_TIME_FORMAT);
      setState({ next, diff });
    }
  }, [prayer, time]);

  const { next, diff } = state;

  return next ? (
    <div className="w-full max-w-sm sm:w-1/2  lg:w-1/4 mx-auto">
      <div className="flex flex-col pt-3">
        <TimeCard
          className="flex-grow"
          time={prayer[next]}
          remaining={diff}
          icon={next}
          title={names[next]}
          isRTL={isRTL}
        />
        <PrayerList data={prayer} next={next} names={names} isRTL={isRTL} />
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Daily;
