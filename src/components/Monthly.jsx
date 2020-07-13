import React, { useContext } from 'react';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import { Spinner } from '../components/common/';
import { AppContext } from '../context';
import { KEYS } from '../i18n';
import { getCity, getGeorgianMonths, parseTime } from '../utils';
import MonthTitle from './MonthTitle';

const Monthly = ({ prayers }) => {
  const { isRTL, slug } = useContext(AppContext);
  const { formatDate, formatMessage } = useIntl();

  const NAMES = Object.keys(prayers[0]).splice(0, 6);
  const city = getCity(slug, isRTL);
  const georgianMonths = getGeorgianMonths(prayers, formatDate, ' ');
  const today = prayers.find(p => p.isToday);
  const hijriMonth = formatMessage({
    id: `HIJRI_MONTH_${today.hijri.month}`
  });

  const arClasses = 'flex-row-reverse text-right';
  const lastItem = 5;

  const table = (
    <>
      

      <table
        className={`border-2 mt-8 w-full text-xs sm:text-sm mx-auto  lg:text-lg md:text-md lg:w-3/4`}
      >
        <thead className="bg-gray-400 text-gray-800">
          <tr className={`px-1 ${isRTL ? arClasses : ''} flex`}>
            <td
              className={`flex-1 ${
                isRTL ? '' : 'border-r'
              } px-1 text-center capitalize`}
            >
              <FormattedMessage id={KEYS.DAY} />
            </td>
            <td className="flex-1 border-r px-1 text-center">{hijriMonth}</td>
            <td className="flex-1 border-r px-1 text-center capitalize">
              {georgianMonths}
            </td>
            {NAMES.map((name, i) => {
              return (
                <td
                  key={name}
                  className={`flex-1 px-1 text-center ${
                    i !== lastItem ? 'border-r border-l' : ''
                  } `}
                >
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
                className={`${isRTL ? arClasses : ''} px-1 border-t flex  ${
                  prayer.isToday ? 'bg-blue-600 text-white' : ''
                }
                ${new Date(prayer.day).getDay() === 5 ? 'bg-green-200' : ''}  
                `}
                key={i}
              >
                <td
                  className={`flex-1 px-1 text-center capitalize ${
                    isRTL ? '' : 'border-r'
                  }`}
                >
                  <FormattedDate value={new Date(prayer.day)} weekday="short" />
                </td>
                <td className="flex-1 border-r px-1 text-center">
                  {prayer.hijri.day}
                </td>
                <td className={`flex-1 border-r px-1 text-center `}>
                  <FormattedDate value={new Date(prayer.day)} day="numeric" />
                </td>
                {NAMES.map((name, j) => (
                  <td
                    className={`flex-1 px-1 text-center ${
                      j !== lastItem ? 'border-r border-l' : ''
                    } `}
                    key={j}
                  >
                    {parseTime(prayer[name])}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <MonthTitle city={city} month={hijriMonth} />
    </>
  );

  return (prayers || []).length > 0 ? table : <Spinner />;
};

export default Monthly;
