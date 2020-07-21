import React, { useContext } from 'react';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';
import { AppContext } from '../context';
import { KEYS } from '../i18n';
import { formatTime, getCity, getGeorgianMonths, localTime } from '../utils';
import MonthTitle from './MonthTitle';

const Monthly = ({ prayers }) => {
  const { isRTL, slug } = useContext(AppContext);
  const { formatDate, formatMessage } = useIntl();

  const isFriday = date => localTime(date).day() === 5;

  const NAMES = Object.keys(prayers[0]).splice(0, 6);
  const city = getCity(slug, isRTL);
  const georgianMonths = getGeorgianMonths(prayers, formatDate, ' ');

  const hijriMonth = formatMessage({
    id: `HIJRI_MONTH_${prayers[0].hijri.month}`
  });

  const Table = styled.table.attrs(_ => ({
    className:
      'border-2 my-4 w-full lg:w-3/4 mx-auto  text-xs sm:text-md md:text-lg lg:text-xl '
  }))`
    direction: ${({ isRTL }) => (isRTL ? 'rtl' : 'ltr')};
    & .day {
      text-align: ${({ isRTL }) => (isRTL ? 'right' : 'left')};
      padding: 0 0.5rem;
    }
  `;

  const Thead = styled.thead.attrs(props => ({
    className: `bg-gray-400 text-gray-800`
  }))``;

  const Tr = styled.tr.attrs(props => ({
    className: `flex border-t 
    ${props.isToday ? 'font-bold text-white bg-green-600' : ''}
    ${props.isFriday ? 'bg-green-200' : ''}`
  }))``;

  const Td = styled.td.attrs(props => ({
    className: `flex-1 border-r text-center capitalize`
  }))``;

  return (
    <>
      <Table isRTL={isRTL}>
        <Thead>
          <Tr>
            <Td className="day">
              <FormattedMessage id={KEYS.DAY} />
            </Td>
            <Td>{hijriMonth}</Td>
            <Td>{georgianMonths}</Td>
            {NAMES.map(name => {
              return (
                <Td key={name}>
                  <FormattedMessage id={`PRAYER_${name.toUpperCase()}`} />
                </Td>
              );
            })}
          </Tr>
        </Thead>

        <tbody>
          {prayers.map((prayer, i) => {
            return (
              <Tr
                isFriday={isFriday(prayer.day)}
                isToday={prayer.isToday}
                key={i}
              >
                <Td className="day hidden sm:block">
                  <FormattedDate value={localTime(prayer.day)} weekday="long" />
                </Td>
                <Td className="day sm:hidden">
                  <FormattedDate
                    value={localTime(prayer.day)}
                    weekday="short"
                  />
                </Td>
                <Td>{prayer.hijri.day}</Td>
                <Td>
                  <FormattedDate value={localTime(prayer.day)} day="numeric" />
                </Td>
                {NAMES.map(name => (
                  <Td key={name}>{formatTime(prayer[name])}</Td>
                ))}
              </Tr>
            );
          })}
        </tbody>
      </Table>
      <MonthTitle city={city} month={hijriMonth} />
    </>
  );
};

export default Monthly;
