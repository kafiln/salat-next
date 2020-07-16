import React from 'react';
import PrayerList from './PrayerList';
import TimeCard from './TimeCard';

const PrayerCard = ({ diff, next, prayer, names, isRTL, className }) => {
  return (
    <div
      className={`flex-1 flex flex-col justify-center rounded-lg ${className}`}
    >
      <TimeCard
        time={prayer[next]}
        remaining={diff}
        icon={next}
        title={names[next]}
        isRTL={isRTL}
      />
      <PrayerList
        className=""
        data={prayer}
        next={next}
        names={names}
        isRTL={isRTL}
      />
    </div>
  );
};

export default PrayerCard;
