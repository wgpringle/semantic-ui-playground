import React, { useState } from 'react';
import Page from '../components/Page';
import nProgress from 'nprogress';
import Router from 'next/router';
import { GlobalStyles } from '/styles/globalStyles.js';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }) {

  const wgData = {
    name: 'jenny is awesome',
  };
  

  return (

      <Page wgprop={wgData}>
        <GlobalStyles />
        
          <Component {...pageProps} />

        <div className="devNote">something _app</div>
      </Page>

  );
}

// MyApp.getInitialProps = async function ({ Component, ctx }) {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   pageProps.query = ctx.query;
//   return { pageProps };
// };

export default MyApp;