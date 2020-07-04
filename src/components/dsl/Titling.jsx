import React from 'react';
import SubTitle from './SubTitle';
import Title from './Title';

const Titling = ({ title, subtitle, ...props }) => {
  return (
    <div {...props}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </div>
  );
};

export default Titling;
