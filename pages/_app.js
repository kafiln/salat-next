import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Seo, Splash } from '../src/components/layout';
import {
  AppContext,
  AppReducer,
  initialState,
  initState
} from '../src/context';
import { DARK } from '../src/context/';
import { I18nProvider } from '../src/i18n';
import { dark, GlobalStyle, light } from '../src/styles';
import '../styles/main.css';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  state = { ...initialState };
  isloaded = false;
  dispatch = action => this.setState(AppReducer(this.state, action));

  componentDidMount() {
    initState(this.dispatch);
    this.isloaded = true;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Seo />
        <AppContext.Provider
          value={{
            ...this.state,
            dispatch: this.dispatch
          }}
        >
          <ThemeProvider theme={this.state.theme === DARK ? dark : light}>
            <GlobalStyle />
            <I18nProvider locale={this.state.lang}>
              {this.isloaded ? <Component {...pageProps} /> : <Splash />}
            </I18nProvider>
          </ThemeProvider>
        </AppContext.Provider>
      </>
    );
  }
}
