import App from 'next/app';
import React, { Component } from "react";
import 'normalize.css/normalize.css';
import '../public/style/global.css';
import { AppProps } from 'next/app';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
