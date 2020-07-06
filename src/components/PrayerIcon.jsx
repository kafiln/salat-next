import React from 'react';
import { FaBug, FaSun } from 'react-icons/fa';
import { FiSun, FiSunrise, FiSunset } from 'react-icons/fi';
import { RiMoonClearLine } from 'react-icons/ri';
import { WiSunrise } from 'react-icons/wi';

const iconList = {
  fajr: WiSunrise,
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
