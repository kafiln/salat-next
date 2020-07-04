import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import cities from '../../public/data/cities.json';
import SelectList from '../components/SelectList';
import { AppContext } from '../context/AppContext';

const LocationInput = ({}) => {
  const { slug, lang, periodicity, isRTL } = useContext(AppContext);
  const router = useRouter();
  return (
    <div className="w-48">
      <div className={`flex items-center ${isRTL && 'flex-row-reverse'} `}>
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
    </div>
  );
};

export default LocationInput;
