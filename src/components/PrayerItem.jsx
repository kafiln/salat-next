import PropTypes from 'prop-types';
import React from 'react';
import PrayerName from './PrayerName';

const PrayerItem = ({ name: { title, icon }, time, next, isRTL, ...props }) => {
  return (
    <div
      className={`flex justify-between px-2 ${props.className} ${
        next ? 'py-2 rounded-md  bg-gray-300 font-bold text-lg' : ''
      }`}
    >
      <PrayerName name={icon} title={title} isRTL={isRTL} />
      <h2>{time}</h2>
    </div>
  );
};

PrayerItem.prototype = {
  name: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }),
  time: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  isRTL: PropTypes.bool
};

export default PrayerItem;
