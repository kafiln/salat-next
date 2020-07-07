import React from 'react';
import { FaBug, FaSun } from 'react-icons/fa';
import { FiSun, FiSunrise, FiSunset } from 'react-icons/fi';
import { RiHazeLine, RiMoonClearLine } from 'react-icons/ri';

const iconList = {
  fajr: RiHazeLine,
  chorouq: FiSunrise,
  dhuhr: FiSun,
  asr: FaSun,
  maghrib: FiSunset,
  ishae: RiMoonClearLine
};
const PrayerIcon = ({ name }) => {
  const IconElement = iconList[name] || FaBug;
  return <IconElement />;
};

export default PrayerIcon;
