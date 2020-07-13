import React from 'react';
import Base from './Base';

const Title = ({ ...props }) => {
  const classes = 'text-center font-semibold py-1 text-md';
  return <Base {...props} tag="h1" baseClasses={classes} />;
};

export default Title;
