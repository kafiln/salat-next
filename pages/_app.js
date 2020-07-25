import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Spinner } from '../src/components/common';
import { CenteredLayout } from '../src/components/layout';
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
      <AppContext.Provider
        value={{
          ...this.state,
          dispatch: this.dispatch
        }}
      >
        <ThemeProvider theme={this.state.theme === DARK ? dark : light}>
          <GlobalStyle />
          <I18nProvider locale={this.state.lang}>
            {this.isloaded ? (
              <Component {...pageProps} />
            ) : (
              <CenteredLayout>
                <Spinner />
              </CenteredLayout>
            )}
            Ò
          </I18nProvider>
        </ThemeProvider>
      </AppContext.Provider>
    );
  }
}
