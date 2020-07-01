import React, { useContext } from 'react';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import { Spinner } from '../../common/';
import { AppContext } from '../../context/AppContext';
import { KEYS } from '../../i18n';
import { getCity } from '../../utils/dataService';
import { getGeorgianMonths, parseTime } from '../../utils/dates';
import Clock from '../Clock';
import { Table, Tbody, Td, Thead, Tr } from './styles';

const Monthly = ({ prayers }) => {
  const { isRTL, slug } = useContext(AppContext);
  const { formatDate, formatMessage } = useIntl();

  const NAMES = Object.keys(prayers[0]).splice(0, 6);
  const city = getCity(slug, isRTL);
  const georgianMonths = getGeorgianMonths(prayers, formatDate);
  const today = prayers.find((p) => p.isToday);
  const hijriMonth = formatMessage({
    id: `HIJRI_MONTH_${today.hijri.month}`,
  });

  const table = (
    <>
      <Clock today={today} />

      <h1 className="text-center py-1 text-2xl">
        <FormattedMessage
          id={KEYS.MONTHLY_TITLE}
          values={{
            month: hijriMonth,
            city,
          }}
        />
      </h1>
      <h2 className="text-center  text-lg text-gray-600">
        <FormattedMessage id={KEYS.MONTHLY_SUBTITLE} />
      </h2>

      <Table className="py-2">
        <Thead>
          <Tr isRTL={isRTL} className="header">
            <Td className="first">
              <FormattedMessage id={KEYS.DAY} />
            </Td>
            <Td>{hijriMonth}</Td>
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
                className={`${prayer.isToday && 'today'}`}
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
