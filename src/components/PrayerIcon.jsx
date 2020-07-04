import React from 'react';
import { FaSun } from 'react-icons/fa';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { WiNightClear } from 'react-icons/wi';

//TODO: Refactor this, is there a better way ?
const Icon = ({ name }) => {
  switch (name) {
    case 'fajr':
      return <FiSunrise />;
    case 'chorouq':
      return <FiSunrise />;
    case 'dhuhr':
      return <FiSunset />;
    case 'asr':
      return <FaSun />;
    case 'maghrib':
      return <FiSunset />;
    case 'ishae':
      return <WiNightClear />;
    default:
      return <FiSunrise />;
  }
};

const PrayerIcon = ({ icon, name, isRTL }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        isRTL ? 'flex-row-reverse' : ''
      }`}
    >
      <Icon name={icon} />
      <span className="capitalize mx-1">{name}</span>
    </div>
  );
};

export default PrayerIcon;
