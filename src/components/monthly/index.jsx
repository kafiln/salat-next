import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import Spinner from '../../common/spinner';
import { AppContext } from '../../context/AppContext';
import { KEYS } from '../../i18n';
import { parseTime } from '../../utils/dates';
import Clock from '../clock';
import SelectList from '../select-list';
import { Table, Tbody, Td, Thead, Tr } from './styles';
const NAMES = require('../../../public/data/prayerNames.json');

const NAMES_FR = Object.keys(NAMES);

const scrollToRef = (ref) =>
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

const addClassToRef = (ref) => (className) =>
  ref.current.classList.add(className);

const isToday = (prayer) =>
  new Date(prayer.day).getDate() === new Date().getDate();

const Monthly = ({ prayers }) => {
  const { lang, slug, cities } = useContext(AppContext);
  const todayRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (todayRef.current) {
      addClassToRef(todayRef)('today'); // add a specific class for that prayer
    }
  }, [lang]);

  useEffect(() => {
    if (todayRef.current) {
      scrollToRef(todayRef); // Scroll to prayer for today
    }
  }, [todayRef.current]);

  const table = (
    <>
      {slug && (
        <div className="w-full mx-auto sm:w-1/2 md:w-1/4 flex justify-evenly">
          <SelectList
            cities={cities}
            slug={slug}
            lang={lang}
            onChange={({ value }) => {
              const redirect = `/monthly/${value}`;
              router.push(`/[periodicity]/[slug]`, redirect);
            }}
          />
        </div>
      )}
      <Clock />
      {/* //TODO:  Intl this 👇👇 and remove inline style */}
      <h1 style={{ textAlign: 'center', margin: '0.5rem 0' }}>
        Prayers for month&nbsp;
        <span style={{ textDecoration: 'underline' }}>
          {prayers && moment.utc(prayers[0].day).format('MMM YYYY')}
        </span>
      </h1>

      <Table>
        <Thead>
          <Tr lang={lang} className="header">
            <Td className="first">
              <FormattedMessage id={KEYS.DAY} />
            </Td>
            {Object.keys(NAMES).map((name, i) => {
              return (
                <Td key={i}>
                  {NAMES[name][lang === 'ar-ma' ? 'ar-ma' : 'fr-fr']}
                </Td>
              );
            })}
          </Tr>
        </Thead>

        <Tbody>
          {Object.entries(prayers || []).map(([_, prayer], i) => {
            return (
              <Tr lang={lang} key={i} ref={isToday(prayer) ? todayRef : null}>
                <Td className="first">
                  <FormattedDate
                    value={new Date(prayer.day)}
                    month="long"
                    day="numeric"
                    weekday="long"
                  ></FormattedDate>
                </Td>
                {NAMES_FR.map((name, j) => (
                  <Td key={j}>{parseTime(prayer[name])}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );

  return (prayers || []).length > 0 ? table : <Spinner />;
};

export default Monthly;
