import React from 'react';

const Text = ({ children, ...props }) => {
  return (
    <span {...props} className="text-xs cursor-pointer">
      {children}
    </span>
  );
};

export default Text;
