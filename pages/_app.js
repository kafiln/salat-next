import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { initState } from "../src/context/actions";
import { AppContext, initialState } from "../src/context/AppContext";
import AppReducer from "../src/context/AppReducer";
import { I18nProvider } from "../src/i18n";
import DefaultLayout from "../src/layout/defaultLayout";
import { dark, GlobalStyles, light } from "../src/themes";
import "../styles/main.css";

export default class MyApp extends App {
  state = { ...initialState };
  dispatch = (action) => this.setState(AppReducer(this.state, action));

  componentDidMount() {
    initState(this.dispatch);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          dispatch: this.dispatch,
        }}
      >
        <ThemeProvider theme={this.state.theme === "dark" ? dark : light}>
          <GlobalStyles />
          <I18nProvider locale={this.state.lang}>
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          </I18nProvider>
        </ThemeProvider>
      </AppContext.Provider>
    );
  }
}
