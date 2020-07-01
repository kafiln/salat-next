import React, { useContext } from 'react';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import cities from '../../../public/data/cities.json';
import { Spinner } from '../../common/';
import { AppContext } from '../../context/AppContext';
import { KEYS } from '../../i18n';
import { parseTime } from '../../utils/dates';
import Clock from '../Clock';
import { Table, Tbody, Td, Thead, Tr } from './styles';

const getGeorgianMonths = (prayers, fn) => {
  const results = new Set();
  prayers.forEach((prayer) => results.add(fn(prayer.day, { month: 'long' })));
  return Array.from(results).join('/');
};

const isToday = (prayer) =>
  new Date(prayer.day).getDate() === new Date().getDate();

const Monthly = ({ prayers, date }) => {
  const { isRTL, slug } = useContext(AppContext);
  const { formatDate, formatMessage } = useIntl();
  const NAMES = Object.keys(prayers[0]).splice(0, 6);

  const georgianMonths = getGeorgianMonths(prayers, formatDate);
  const currentHijriMonth = formatMessage({
    id: `HIJRI_MONTH_${prayers[0].hijri.month}`,
  });
  const city = cities.find((e) => e.slug === slug).names[
    isRTL ? 'ar-ma' : 'fr-fr'
  ];
  const table = (
    <>
      <Clock hijri={date} />
      <h1 className="text-center py-2 text-2xl">
        <FormattedMessage
          id={KEYS.MONTHLY_TITLE}
          values={{
            month: currentHijriMonth,
            city,
          }}
        />
      </h1>

      <Table>
        <Thead>
          <Tr isRTL={isRTL} className="header">
            <Td className="first">
              <FormattedMessage id={KEYS.DAY} />
            </Td>
            <Td>{currentHijriMonth}</Td>
            <Td>{georgianMonths}</Td>
            {NAMES.map((name, i) => {
              return (
                <Td key={i}>
                  <FormattedMessage id={`PRAYER_${name.toUpperCase()}`} />
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
              >
                <Td className="first">
                  <FormattedDate value={new Date(prayer.day)} weekday="long" />
                </Td>
                <Td>{prayer.hijri.day}</Td>
                <Td>
                  <FormattedDate value={new Date(prayer.day)} day="numeric" />
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
