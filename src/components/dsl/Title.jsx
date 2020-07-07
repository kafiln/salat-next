import React from 'react';
import Base from './Base';

const Title = ({ level, ...props }) => {
  const classes = 'text-center font-semibold py-1 text-md';
  // //TODO: check for value in [1,2,3,4,5,6]
  // const tag = level ? `h${level}` : 'h1';

  return <Base {...props} tag="h1" baseClasses={classes} />;
};

export default Title;
