import React from 'react';
import { Spinner } from '../common';
import CenteredLayout from './CenteredLayout';

const Splash = () => {
  return (
    <CenteredLayout className="bg-gray-300">
      <Spinner />
    </CenteredLayout>
  );
};

export default Splash;
