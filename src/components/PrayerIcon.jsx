import React from 'react';
import { FaBug, FaSun } from 'react-icons/fa';
import { FiSun, FiSunrise, FiSunset } from 'react-icons/fi';
import { RiMoonClearLine } from 'react-icons/ri';
import { WiSunrise } from 'react-icons/wi';

//TODO: Refactor this, is there a better way ?
const PrayerIcon = ({ name }) => {
  switch (name) {
    case 'fajr':
      return <WiSunrise />; //TODO: find a better icon
    case 'chorouq':
      return <FiSunrise />;
    case 'dhuhr':
      return <FiSun />;
    case 'asr':
      return <FaSun />;
    case 'maghrib':
      return <FiSunset />;
    case 'ishae':
      return <RiMoonClearLine />;
    default:
      console.log(name);
      return <FaBug />; // This should never render unless there is a 🐛
  }
};

export default PrayerIcon;
