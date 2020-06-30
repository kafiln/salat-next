import React, { useContext } from 'react';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import { Spinner } from '../../common/';
import { AppContext } from '../../context/AppContext';
import { KEYS } from '../../i18n';
import { parseTime } from '../../utils/dates';
import Clock from '../Clock';
import { Table, Tbody, Td, Thead, Tr } from './styles';

// const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

// const addClassToRef = (ref) => (className) => {
//   // console.log(className);
//   ref.current.classList.add(className);
//   console.log(ref.current.classList);
// };

const getGeorgianMonths = (prayers, intl) => {
  const results = new Set();
  prayers.forEach((prayer) =>
    results.add(intl.formatDate(prayer.day, { month: 'long' }))
  );
  return Array.from(results).join('/');
};

const isToday = (prayer) =>
  new Date(prayer.day).getDate() === new Date().getDate();

const Monthly = ({ prayers, date }) => {
  // const { lang, isRTL, theme } = useContext(AppContext);
  const { isRTL } = useContext(AppContext);
  const intl = useIntl();
  // const todayRef = useRef(null);
  const NAMES = Object.keys(prayers[0]).splice(0, 6);

  const georgianMonths = getGeorgianMonths(prayers, intl);

  // useEffect(() => {
  //   if (todayRef.current) {
  //     console.log('todays ref SET 😊');
  //     addClassToRef(todayRef)('today'); // add a specific class for that prayer
  //   } else {
  //     console.log('todays ref not set');
  //   }
  // }, [lang, theme]);

  // useEffect(() => {
  //   if (todayRef.current) {
  //     scrollToRef(todayRef); // Scroll to prayer for today
  //   }
  // }, [todayRef.current]);

  const table = (
    <>
      <Clock hijri={date} />

      <Table>
        <Thead>
          <Tr isRTL={isRTL} className="header">
            <Td className="first">
              <FormattedMessage id={KEYS.DAY} />
            </Td>
            <Td>
              <FormattedMessage id={`HIJRI_MONTH_${prayers[0].hijri.month}`} />
            </Td>
            <Td>{georgianMonths}</Td>
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
              <Tr
                className={`${isToday(prayer) && 'today'}`}
                isRTL={isRTL}
                key={i}
                // ref={isToday(prayer) ? todayRef : null}
              >
                <Td className="first">
                  <FormattedDate
                    value={new Date(prayer.day)}
                    weekday="long"
                  ></FormattedDate>
                </Td>
                <Td>{prayer.hijri.day}</Td>
                <Td>
                  <FormattedDate
                    value={new Date(prayer.day)}
                    day="numeric"
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
