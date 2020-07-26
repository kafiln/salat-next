import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    let pageProps;

    const styleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styleSheet.collectStyles(<App {...props} />)
        });

      pageProps = await Document.getInitialProps(ctx);

      pageProps.styles = (
        <>
          {pageProps.styles}
          {styleSheet.getStyleElement()}
        </>
      );
    } finally {
      styleSheet.seal();
    }

    return pageProps;
  }

  render() {
    return (
      <Html lang="ar">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}