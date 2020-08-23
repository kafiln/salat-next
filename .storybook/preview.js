import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, light } from '../src/styles';
import '../styles/main.css';

addDecorator(story => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <div style={{ padding: '1rem', zoom: 3 }}>{story()}</div>
  </ThemeProvider>
));
