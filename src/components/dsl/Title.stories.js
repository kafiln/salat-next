import Title from './Title';

export default {
  title: 'Title',
  component: Title,
};

export const Default = () => (
  <Title>الجمعة 11 ذو القعدة 1441هــ الموافق لـ 3 يوليوز 2020</Title>
);

export const withStyles = () => (
  <Title style={{ color: '#234578' }}>
    الجمعة 11 ذو القعدة 1441هــ الموافق لـ 3 يوليوز 2020
  </Title>
);
