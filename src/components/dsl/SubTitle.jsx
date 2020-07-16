import React from 'react';
import Base from './Base';

const SubTitle = ({ ...props }) => {
  const classes = 'text-center text-lg';
  return <Base {...props} tag="h2" baseClasses={classes} />;
};

export default SubTitle;
