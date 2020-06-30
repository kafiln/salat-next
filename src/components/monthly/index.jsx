import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import Spinner from '../../common/spinner';
import { AppContext } from '../../context/AppContext';
import { KEYS } from '../../i18n';
import { parseTime } from '../../utils/dates';
import Clock from '../clock';
import { Table, Tbody, Td, Thead, Tr } from './styles';

const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

const addClassToRef = (ref) => (className) =>
  ref.current.classList.add(className);

const isToday = (prayer) =>
  new Date(prayer.day).getDate() === new Date().getDate();

const Monthly = ({ prayers, date }) => {
  const { lang, isRTL, slug, cities, theme } = useContext(AppContext);
  const todayRef = useRef(null);
  const router = useRouter();
  const NAMES = Object.keys(prayers[0]).splice(0, 6);

  useEffect(() => {
    if (todayRef.current) {
      addClassToRef(todayRef)('today'); // add a specific class for that prayer
    }
  }, [lang, theme]);

  useEffect(() => {
    if (todayRef.current) {
      scrollToRef(todayRef); // Scroll to prayer for today
    }
  }, [todayRef.current]);

  const table = (
    <>
      <Clock hijri={date} />
      {/* //TODO: Intl this 👇👇 and remove inline style */}
      {/* <h1 style={{ textAlign: 'center', margin: '0.5rem 0' }}>
        Prayers for month&nbsp;
        <span style={{ textDecoration: 'underline' }}>
          {prayers && moment.utc(prayers[0].day).format('MMM YYYY')}
        </span>
      </h1> */}
      <Table>
        <Thead>
          <Tr isRTL={isRTL} className="header">
            <Td className="first">
              <FormattedMessage id={KEYS.DAY} />
            </Td>
            {NAMES.map((name, i) => {
              return (
                <Td key={i}>
                  <FormattedMessage
                    id={`PRAYER_${name.toUpperCase()}`}
                  ></FormattedMessage>
                </Td>
              );
            })}
          </Tr>
        </Thead>

        <Tbody>
          {Object.entries(prayers || []).map(([_, prayer], i) => {
            return (
              <Tr isRTL={isRTL} key={i} ref={isToday(prayer) ? todayRef : null}>
                <Td className="first">
                  <FormattedDate
                    value={new Date(prayer.day)}
                    month="long"
                    day="numeric"
                    weekday="long"
                  ></FormattedDate>
                </Td>
                {NAMES.map((name, j) => (
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
