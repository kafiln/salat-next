import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { AppContext, initialState } from "../src/context/AppContext";
import AppReducer from "../src/context/AppReducer";
import { I18nProvider } from "../src/i18n";
import { dark, GlobalStyles, light } from "../src/themes";

export default class MyApp extends App {
  state = { ...initialState };
  dispatch = (action) => this.setState(AppReducer(this.state, action));

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          dispatch: this.dispatch,
        }}
      >
        <ThemeProvider theme={this.state.theme === "light" ? light : dark}>
          <GlobalStyles />
          <I18nProvider locale={this.state.lang}>
            <Component {...pageProps} />
          </I18nProvider>
        </ThemeProvider>
      </AppContext.Provider>
    );
  }
}
