import React from 'react';
import { parseTime } from '../utils/dates';
import PrayerItem from './PrayerItem';

const PrayerList = ({ data, next, names, isRTL }) => {
  const { id, day, hijri, isToday, ...prayers } = data;
  const list = Object.keys(prayers).map((key) => (
    <PrayerItem
      className={`py-2 ${isRTL ? 'flex-row-reverse' : ''}`}
      key={key}
      name={names[key]}
      icon={key}
      next={next === key}
      time={parseTime(prayers[key])}
      isRTL={isRTL}
    />
  ));
  return <div className="">{list}</div>;
};

export default PrayerList;
