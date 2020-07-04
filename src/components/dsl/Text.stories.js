import { action } from '@storybook/addon-actions';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

export const Default = () => (
  <Text onClick={action('Text clicked')}>
    السبت 12 ذو القعدة 1441هــ الموافق لـ 4 يوليوز 2020
  </Text>
);
