import PropTypes from 'prop-types';
import React from 'react';
import PrayerName from './PrayerName';

const PrayerItem = ({ name: { title, icon }, time, next, isRTL, ...props }) => {
  return (
    <div
      className={`flex justify-between  ${props.className} ${
        next
          ? 'px-2 rounded-md bg-blue-300 text-white font-semibold text-lg'
          : ''
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

// const styles = {
//   container: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   next: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: next ? 'bold' : 'normal',
//     color: '#212B46',
//     textTransform: 'capitalize',
//   },
//   nameContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   time: {
//     fontSize: 18,
//     fontWeight: next ? 'bold' : 'normal',
//     color: '#212B46',
//   },
//   icon: {
//     marginHorizontal: 10,
//     color: '#212B46',
//     fontWeight: next ? 'bold' : 'normal',
//   },
// };
