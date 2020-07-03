import SubTitle from './SubTitle';

export default {
  title: 'SubTitle',
  component: SubTitle,
};

export const Default = () => (
  <SubTitle>حسب توقيت وزارة الاوقاف والشؤون الاسلامية بالمغرب</SubTitle>
);

export const withStyles = () => (
  <SubTitle style={{ color: '#234578' }}>
    حسب توقيت وزارة الاوقاف والشؤون الاسلامية بالمغرب
  </SubTitle>
);
