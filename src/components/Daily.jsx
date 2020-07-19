import React, { useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Spinner } from '../components/common';
import { AppContext } from '../context/';
import { useTime } from '../hooks';
import { DEFAULT_TIME_FORMAT } from '../settings';
import { localTime, UTC } from '../utils';
import PrayerCard from './PrayerCard';

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
        localTime().isBefore(localTime(prayer[t]))
      );
      const next = nextOnes.length === 0 ? Object.keys(names)[0] : nextOnes[0];
      const diffInSeconds = UTC(prayer[next]).diff(UTC(time));
      // .format(DEFAULT_TIME_FORMAT);
      setState({
        next,
        diff: UTC(diffInSeconds).format(DEFAULT_TIME_FORMAT)
      });
    }
  }, [prayer, time]);

  const { next, diff } = state;

  return next ? (
    <div className="flex flex-1 w-full max-w-sm sm:w-1/2 lg:w-1/4 mx-auto">
      <PrayerCard
        className=""
        diff={diff}
        next={next}
        prayer={prayer}
        names={names}
        isRTL={isRTL}
      />
    </div>
  ) : (
    <Spinner />
  );
};

export default Daily;
