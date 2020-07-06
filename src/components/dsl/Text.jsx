import React from 'react';
import Base from './Base';

const Text = ({ ...props }) => {
  const classes = 'text-xs sm:text-md md:text-lg';

  return <Base {...props} tag="h1" baseClasses={classes} />;
};

export default Text;
