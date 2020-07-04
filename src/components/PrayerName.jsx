import PrayerIcon from './PrayerIcon';

const PrayerName = ({ icon, name, isRTL }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        isRTL ? 'flex-row-reverse' : ''
      }`}
    >
      <PrayerIcon name={icon} />
      <span className="capitalize mx-1">{name}</span>
    </div>
  );
};

export default PrayerName;
