import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../../common/spinner';
import { AppContext } from '../../context/AppContext';
import useInterval from '../../hooks/useInterval';
import { DEFAULT_TIME_FORMAT } from '../../settings';
import { parseTime } from '../../utils/dates';
import Clock from '../clock';
import SelectList from '../select-list';
import { Difference, Li, Name, Time, Ul } from './styles';

const NAMES = require('../../../public/data/prayerNames.json');

const Daily = ({ prayers, date }) => {
  const { lang, slug, cities, periodicity } = useContext(AppContext);

  const router = useRouter();
  let prayer = (prayers || [])[0];

  const [state, setState] = useState({});
  const [time, setTime] = useState(moment());

  const thick = () => {
    setTime(moment());
  };

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

  useInterval(thick, 1000);

  const { next, diff } = state;

  return prayer ? (
    <>
      {slug && (
        <div className="w-full mx-auto sm:w-1/2 md:w-1/4 flex justify-evenly">
          <SelectList
            cities={cities}
            slug={slug}
            lang={lang}
            onChange={({ value }) => {
              const redirect = `/${periodicity}/${value}`;
              router.push(`/[periodicity]/[slug]`, redirect);
            }}
          />
        </div>
      )}
      <Clock displayTime time={time} day={prayer.day} hijri={date} />

      <Ul>
        {Object.keys(NAMES).map((name) => {
          return (
            <Li key={name} lang={lang} className={name === next ? 'next' : ''}>
              <Name>{NAMES[name][lang === 'ar-ma' ? 'ar-ma' : 'fr-fr']}</Name>
              {name === next && <Difference>{diff}</Difference>}
              <Time>{parseTime(prayer[name])}</Time>
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
