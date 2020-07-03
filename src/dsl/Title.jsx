import React from 'react';

const Title = ({ children, ...props }) => {
  return (
    <h1 {...props} className="text-center font-semibold py-1 text-2xl">
      {children}
    </h1>
  );
};

export default Title;
