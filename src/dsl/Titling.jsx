import React from 'react';
import SubTitle from './SubTitle';
import Title from './Title';

const Titling = ({ title, subtitle }) => {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </>
  );
};

export default Titling;
