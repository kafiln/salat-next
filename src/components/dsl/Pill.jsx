import React from 'react';
import Base from './Base';

const Pill = ({ ...props }) => {
  const classes =
    'p-1 cursor-pointer border border-gray-500 focus:outline-none rounded-full';
  const styles = { userSelect: 'none' };

  return <Base {...props} baseClasses={classes} baseStyles={styles} />;
};

export default Pill;
