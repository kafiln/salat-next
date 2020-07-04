import React from 'react';
import PrayerIcon from './PrayerIcon';

const PrayerItem = ({ icon, name, time, next, isRTL, ...props }) => {
  return (
    <div
      className={`flex justify-between  ${props.className} ${
        next
          ? 'px-2 rounded-md bg-blue-300 text-white font-semibold text-lg'
          : ''
      }`}
    >
      <PrayerIcon icon={icon} name={name} isRTL={isRTL} />
      <h2>{time}</h2>
    </div>
  );
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
