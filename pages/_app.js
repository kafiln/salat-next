import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import React from "react";
import { ThemeProvider } from "styled-components";
import { initState } from "../src/context/actions";
import { AppContext, initialState } from "../src/context/AppContext";
import AppReducer from "../src/context/AppReducer";
import { DARK } from "../src/context/types";
import { I18nProvider } from "../src/i18n";
import DefaultLayout from "../src/layout/defaultLayout";
import { dark, GlobalStyles, light } from "../src/themes";
import "../styles/main.css";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
        <ThemeProvider theme={this.state.theme === DARK ? dark : light}>
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
