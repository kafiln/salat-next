import React from 'react';
import Base from './Base';

const SubTitle = ({ ...props }) => {
  const classes = 'text-center text-lg text-gray-600';
  return <Base {...props} tag="h2" baseClasses={classes} />;
};

export default SubTitle;
