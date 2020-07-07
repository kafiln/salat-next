import React from 'react';
import { SubTitle, Titling } from '../components/dsl';
import { parseTime } from '../utils/dates';
import PrayerName from './PrayerName';

const TimeCard = ({ title, icon, remaining, time, isRTL }) => {
  return (
    <div className="bg-gray-300 rounded-lg py-2 my-2">
      <SubTitle>
        <PrayerName className="py-2" isRTL={isRTL} title={title} name={icon} />
      </SubTitle>
      <Titling title={`-${remaining}`} subtitle={parseTime(time)}></Titling>
    </div>
  );
};

export default TimeCard;

// const styles ={
//   backgroundImage: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   settingsdiv: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   icon: {
//     color: '#fff',
//   },
//   timeCard: {
//     backgroundColor: 'rgba(43.9, 51.8, 67.8, 0.8)',
//     paddingHorizontal: 20,
//     paddingVertical: 40,
//     borderRadius: 10,
//     justifyContent: 'space-between',
//     width: '90%',
//   },
//   name: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textPrimary: {
//     color: '#FBF2DF',
//     textAlign: 'center',
//     fontSize: 48,
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//     fontWeight: 'bold',
//   },
//   textSecondary: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 24,
//     paddingHorizontal: 20,
//     textTransform: 'capitalize',
//   },
// };
