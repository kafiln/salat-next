import PropTypes from 'prop-types';
import PrayerIcon from './PrayerIcon';

const PrayerName = ({ name, title, isRTL }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        isRTL ? 'flex-row-reverse' : ''
      }`}
    >
      <PrayerIcon name={name} />
      <span className="capitalize mx-1">{title}</span>
    </div>
  );
};

PrayerName.prototype = {
  name: PropTypes.string.isRequired, // Used to get the right icon
  title: PropTypes.string.isRequired, // Prayer name
  isRTL: PropTypes.bool
};

export default PrayerName;
