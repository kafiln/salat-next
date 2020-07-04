import { select, withKnobs } from '@storybook/addon-knobs';
import PrayerIcon from './PrayerIcon';

export default {
  title: 'Prayer Icons',
  component: PrayerIcon
};

export const Default = () => (
  <PrayerIcon
    name={select('Name', [
      'fajr',
      'chorouq',
      'dhuhr',
      'asr',
      'maghrib',
      'ishae'
    ])}
  />
);

Default.story = {
  decorators: [withKnobs]
};
