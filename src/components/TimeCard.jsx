import React from 'react';
import { SubTitle, Titling } from '../components/dsl';
import { formatTime } from '../utils';
import PrayerName from './PrayerName';

const TimeCard = ({ title, icon, remaining, time, isRTL }) => {
  return (
    <div className="bg-gray-200 rounded-lg py-2 my-2">
      <SubTitle>
        <PrayerName className="py-2" isRTL={isRTL} title={title} name={icon} />
      </SubTitle>
      <Titling title={`-${remaining}`} subtitle={formatTime(time)}></Titling>
    </div>
  );
};

export default TimeCard;
