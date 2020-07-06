import React from 'react';

const Text = ({ children, ...props }) => {
  return (
    <span
      {...props}
      className={`text-xs sm:text-md md:text-lg ${props.className}`}
    >
      {children}
    </span>
  );
};

export default Text;
