import { addDecorator } from '@storybook/react';
import React from 'react';
import { GlobalStyle } from '../src/styles';
import '../styles/main.css';

addDecorator(story => (
  <>
    <GlobalStyle />
    <div style={{ padding: '1rem' }}>{story()}</div>
  </>
));
