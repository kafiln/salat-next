import { useRouter } from 'next/router';
import React, { useContext, useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Select from 'react-select';
import cities from '../../../public/data/cities.json';
import { AppContext } from '../../context/AppContext';

const orderBy = field => (a, b) =>
  a[field] > b[field] ? 1 : b[field] > a[field] ? -1 : 0;

const LocationInput = ({}) => {
  const { slug, lang, periodicity, isRTL } = useContext(AppContext);
  const options = cities
    ? cities
        .map(e => ({
          value: e.slug,
          label: e.names[isRTL ? 'ar-ma' : 'fr-fr']
        }))
        .sort(orderBy('label'))
    : [];

  const value = options.find(e => e.value == slug);
  const router = useRouter();
  const selectRef = useRef();
  const handleClick = () => {
    selectRef.current.focus();
    console.log(selectRef);
  };
  return (
    <div
      className={`flex items-center justify-center max-w-md mx-auto ${isRTL &&
        'flex-row-reverse'} `}
    >
      <FaMapMarkerAlt
        size="1.5em"
        className="cursor-pointer"
        onClick={handleClick}
      />
      <div className="flex-1 mx-2">
        <Select
          instanceId={slug}
          // styles={customStyles}
          options={options}
          value={value}
          ref={selectRef}
          isRtl={isRTL}
          onChange={({ value }) => {
            const redirect = `/${periodicity}/${value}`;
            router.push(`/[periodicity]/[slug]`, redirect);
          }}
        />
      </div>
    </div>
  );
};

export default LocationInput;
