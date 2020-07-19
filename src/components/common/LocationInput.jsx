import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Select from 'react-select';
import { AppContext } from '../../context';
import { ClickOutside, getAllCities, orderBy } from '../../utils';
import { Title } from '../dsl';

const LocationInput = ({ }) => {
  const { slug, periodicity, isRTL } = useContext(AppContext);
  const options = getAllCities(isRTL).sort(orderBy('label'));

  const currentCity = options.find(e => e.value == slug);
  const router = useRouter();

  const [hideList, setHideList] = useState(true);
  const toggleList = () => setHideList(hideList => !hideList);

  return (
    <div
      className={`flex items-center justify-center max-w-md mx-auto ${isRTL &&
        'flex-row-reverse'} `}
    >
      <FaMapMarkerAlt
        size="1.5em"
        className="cursor-pointer"
        onClick={toggleList}
      />
      {hideList && <Title className={`mx-2 ${hideList ? '' : 'hidden'}`}>
        {currentCity.label}
      </Title>}
      <ClickOutside className={`flex-1 mx-2 ${!hideList ? '' : 'hidden'}`} onClickOutside={() => { if (!hideList) setHideList(true) }}>
        <Select
          instanceId={slug}
          // styles={customStyles}
          options={options}
          value={currentCity}
          menuIsOpen={!hideList}
          isRtl={isRTL}
          onChange={({ value }) => {
            toggleList();
            const redirect = `/${periodicity}/${value}`;
            router.push(`/[periodicity]/[slug]`, redirect);
          }}
        />
      </ClickOutside>
    </div>
  );
};

export default LocationInput;
