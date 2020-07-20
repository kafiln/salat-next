import dynamic from 'next/dynamic';
import React, { useContext } from 'react';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import { Spinner } from '../components/common/';
import { AppContext } from '../context';
import { KEYS } from '../i18n';
import { formatTime, getCity, getGeorgianMonths } from '../utils';
import MonthTitle from './MonthTitle';
import MyDocument from './MyDocument';

const PDFDownloadLink = dynamic(
  import('@react-pdf/renderer').then(m => m.PDFDownloadLink),
  { ssr: false }
);

// const MyDocument = dynamic(import('./MyDocument'), { ssr: false });

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
      <div>
        <PDFDownloadLink document={MyDocument} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      </div>
      <table
        className={`border-2 my-4 w-full lg:w-3/4 mx-auto  text-xs sm:text-md md:text-lg  lg:text-xl `}
      >
        <thead className="bg-gray-400 text-gray-800">
          <tr className={` ${isRTL ? arClasses : ''} flex`}>
            <td
              className={`flex-1 ${
                isRTL ? '' : 'border-r'
              }  text-center capitalize`}
            >
              <FormattedMessage id={KEYS.DAY} />
            </td>
            <td className="flex-1 border-r  text-center">{hijriMonth}</td>
            <td className="flex-1 border-r  text-center capitalize">
              {georgianMonths}
            </td>
            {NAMES.map((name, i) => {
              return (
                <td
                  key={name}
                  className={`flex-1  text-center ${
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
                className={`${isRTL ? arClasses : ''} border-t flex  
                ${new Date(prayer.day).getDay() === 5 ? 'bg-green-200' : ''}  
                ${prayer.isToday ? 'font-bold text-white bg-green-600' : ''}
                `}
                key={i}
              >
                <td
                  className={`flex-1  text-center capitalize ${
                    isRTL ? '' : 'border-r'
                  }`}
                >
                  <FormattedDate value={new Date(prayer.day)} weekday="short" />
                </td>
                <td className="flex-1 border-r  text-center">
                  {prayer.hijri.day}
                </td>
                <td className={`flex-1 border-r  text-center `}>
                  <FormattedDate value={new Date(prayer.day)} day="numeric" />
                </td>
                {NAMES.map((name, j) => (
                  <td
                    className={`flex-1  text-center ${
                      j !== lastItem ? 'border-r border-l' : ''
                    } `}
                    key={j}
                  >
                    {formatTime(prayer[name])}
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
