import React from 'react';
import { Container, Select } from './styles';

const byLabel = (a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0);

const SelectList = React.memo(({ onChange, cities, slug, lang }) => {
  const options = cities
    ? cities
        .map((e) => ({
          value: e.slug,
          label: e.names[lang === 'ar-ma' ? 'ar-ma' : 'fr-fr'],
        }))
        .sort(byLabel)
    : [];

  const value = options.find((e) => e.value == slug);

  const customStyles = {
    singleValue: (provided) => {
      const padding = '20px 10px';
      return { ...provided, padding, width: '100%' };
    },
  };

  return (
    <Container>
      <Select
        instanceId={slug}
        styles={customStyles}
        options={options}
        value={value}
        isRtl={lang === 'ar-ma'}
        onChange={onChange}
      />
    </Container>
  );
});

export default SelectList;
