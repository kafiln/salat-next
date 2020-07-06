import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import cities from '../../../public/data/cities.json';
import { AppContext } from '../../context/AppContext';
import SelectList from '../SelectList';

const LocationInput = ({}) => {
  const { slug, lang, periodicity, isRTL } = useContext(AppContext);
  const router = useRouter();
  return (
    <div
      className={`flex items-center justify-center max-w-md mx-auto ${isRTL &&
        'flex-row-reverse'} `}
    >
      <FaMapMarkerAlt size="1.5em" />
      <div className="flex-1 mx-2">
        <SelectList
          cities={cities}
          slug={slug}
          lang={lang}
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
