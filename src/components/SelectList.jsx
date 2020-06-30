import React from 'react';
import Select from 'react-select';
import { isRTL } from '../i18n';

const byLabel = (a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0);

const SelectList = React.memo(({ onChange, cities, slug, lang, isRtl }) => {
  const options = cities
    ? cities
        .map((e) => ({
          value: e.slug,
          label: e.names[isRTL(lang) ? 'ar-ma' : 'fr-fr'],
        }))
        .sort(byLabel)
    : [];

  const value = options.find((e) => e.value == slug);

  return (
    <Select
      instanceId={slug}
      // styles={customStyles}
      options={options}
      value={value}
      isRtl={isRtl}
      onChange={onChange}
    />
  );
});

export default SelectList;
