import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useContext, useRef, useState } from 'react';
import Spinner from '../../common/spinner';
import { AppContext } from '../../context/AppContext';
import { DAILY } from '../../context/types';
import useInterval from '../../hooks/useInterval';
import { DEFAULT_TIME_FORMAT } from '../../settings';
import { parseTime } from '../../utils/dates';
import Clock from '../clock';
import SelectList from '../select-list';
import { Difference, Li, Name, Time, Ul } from './styles';

const NAMES = require('../../../public/data/prayerNames.json');

const Daily = ({ prayers }) => {
  const { lang, slug, cities } = useContext(AppContext);
  const diffRef = useRef();
  const nextRef = useRef();
  const timeRef = useRef();
  const [next, setNext] = useState(Object.keys(NAMES)[0]);

  const router = useRouter();
  let prayer = (prayers || [])[0];

  const thick = () => {
    if (prayer) {
      timeRef.current = moment();
      const nextOnes = Object.keys(prayer).filter((t) =>
        timeRef.current.utc().isBefore(moment.utc(prayer[t]))
      );
      const localNext =
        nextOnes.length === 0 ? Object.keys(NAMES)[0] : nextOnes[0];
      const diff = moment
        .utc(moment.utc(prayer[localNext]).diff(timeRef.current.utc()))
        .format(DEFAULT_TIME_FORMAT);
      nextRef.current = localNext;
      if (nextRef.current !== next) {
        setNext(nextRef.current);
      }
      if (diffRef.current) {
        diffRef.current.textContent = diff;
      }
    }
  };

  useInterval(thick, 1000);

  return prayer ? (
    <>
      {slug && (
        <div className="w-full mx-auto sm:w-1/2 md:w-1/4 flex justify-evenly">
          <SelectList
            cities={cities}
            slug={slug}
            lang={lang}
            onChange={({ value }) => {
              const redirect = `/${DAILY}/${value}`;
              router.push(`/[periodicity]/[slug]`, redirect);
            }}
          />
        </div>
      )}
      <Clock displayTime />
      <Ul>
        {Object.keys(NAMES).map((name) => {
          return (
            <Li key={name} lang={lang} className={name === next ? 'next' : ''}>
              <Name>{NAMES[name][lang === 'ar-ma' ? 'ar-ma' : 'fr-fr']}</Name>
              {name === next && <Difference ref={diffRef}></Difference>}
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
