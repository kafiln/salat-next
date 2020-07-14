import React from 'react';
import { formatTime } from '../utils';
import PrayerItem from './PrayerItem';

const PrayerList = ({ data, next, names, isRTL }) => {
  const { id, day, hijri, isToday, ...prayers } = data;
  const list = Object.keys(prayers).map(key => {
    return (
      <PrayerItem
        className={`py-2 ${isRTL ? 'flex-row-reverse' : ''}`}
        key={key}
        name={{ title: names[key], icon: key }}
        next={next === key}
        time={formatTime(prayers[key])}
        isRTL={isRTL}
      />
    );
  });
  return <div className="">{list}</div>;
};

export default PrayerList;
