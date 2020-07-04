import React from 'react';

const SubTitle = ({ children, ...props }) => {
  return (
    <h2
      {...props}
      className={`text-center text-lg text-gray-600 ${
        props.className ? props.className : ''
      }`}
    >
      {children}
    </h2>
  );
};

export default SubTitle;
