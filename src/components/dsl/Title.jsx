import React from 'react';
import Base from './Base';

const Title = ({ ...props }) => {
  const classes = 'text-center py-1 text-xl';
  return <Base {...props} tag="h1" baseClasses={classes} />;
};

export default Title;
