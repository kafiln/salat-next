import { select, withKnobs } from '@storybook/addon-knobs';
import PrayerItem from './PrayerItem';

export default {
  title: 'PrayerItems',
  component: PrayerItem
};

const prayerNames = [
  { icon: 'fajr', title: 'Fajr', label: 'Fajr' },
  { icon: 'chorouq', title: 'Chorouq', label: 'Chorouq' },
  { icon: 'dhuhr', title: 'Dhuhr', label: 'Dhuhr' },
  { icon: 'asr', title: 'Asr', label: 'Asr' },
  { icon: 'maghrib', title: 'Maghrib', label: 'Maghrib' },
  { icon: 'ishae', title: 'Ishae', label: 'Ishae' }
];

export const Default = () => (
  <PrayerItem name={select('Name', prayerNames, prayerNames[0])} />
);

Default.story = {
  decorators: [withKnobs]
};
