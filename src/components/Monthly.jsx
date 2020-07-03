import React, { useContext } from 'react';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import { Spinner } from '../common/';
import { AppContext } from '../context';
import { KEYS } from '../i18n';
import { getCity } from '../utils/dataService';
import { getGeorgianMonths, parseTime } from '../utils/dates';
import Clock from './Clock';
import MonthTitle from './MonthTitle';

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

  const arClasses = 'flex-row-reverse text-right';

  const table = (
    <>
      <Clock today={today} />
      <MonthTitle city={city} month={hijriMonth} />

      <table className={` border-2 mt-4`}>
        <thead className="bg-gray-400 text-gray-800 font-semibold">
          <tr
            className={`p-1 ${
              isRTL && arClasses
            } header border-t flex justify-center`}
          >
            <td className="flex-1 capitalize">
              <FormattedMessage id={KEYS.DAY} />
            </td>
            <td className="flex-1">{hijriMonth}</td>
            <td className="flex-1 capitalize">{georgianMonths}</td>
            {NAMES.map((name, i) => {
              return (
                <td className="flex-1" key={i}>
                  <FormattedMessage id={`PRAYER_${name.toUpperCase()}`} />
                </td>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {Object.entries(prayers || []).map(([_, prayer], i) => {
            return (
              <tr
                className={`p-1 ${
                  isRTL && arClasses
                } border-t flex justify-center ${
                  prayer.isToday && 'bg-blue-600 text-white'
                }`}
                key={i}
              >
                <td className="flex-1 capitalize">
                  <FormattedDate value={new Date(prayer.day)} weekday="long" />
                </td>
                <td className="flex-1">{prayer.hijri.day}</td>
                <td className="flex-1">
                  <FormattedDate value={new Date(prayer.day)} day="numeric" />
                </td>
                {NAMES.map((name, j) => (
                  <td className="flex-1" key={j}>
                    {parseTime(prayer[name])}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  return (prayers || []).length > 0 ? table : <Spinner />;
};

export default Monthly;
