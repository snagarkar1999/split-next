import React from 'react'
import App from 'next/app'
import { SplitFactory } from '@splitsoftware/splitio'
import { FEATURE } from '../../constants'
import Button from "../components/Button";

class MyApp extends App {

    constructor() {
      super();
      // this.colorMode = this.colorMode.bind(this);
      // this.displayText = this.displayText.bind(this);
      // this.askLadder = this.askLadder.bind(this);
    }

  componentDidMount() {

    const {userKey, treatments } = this.props.pageProps;
    // Save the treatment evaluated on server-side on the global `window` object, to use when navigating among pages on client-side.
    // You could also save it as a cookie, or in localStorage.
   if (treatments) window[FEATURE] = treatments;
   console.log(treatments);

    // Init Split on client-side
    (function () {
      window.split = window.split ||
        SplitFactory({
          core: {
            authorizationKey: 'l57fu4jnq9gk93ltb63tvtkboh07m54vp32v',
            key: userKey,
            trafficType: 'user'
          },
          debug: true,
        });
    })();

    split?.client().track('app_opened');

  }

  render() {
    const { Component, pageProps } = this.props; //props has component and pageProps and pageProps has userKey and treatment
    return (<Component {...pageProps} />);
  }
}

MyApp.getInitialProps = async function (appContext) {
  if (appContext.ctx.req) {

    const userKey = Math.floor(Math.random() * 1000000) + 1;
    const splitClient = require('../../server/getServerSideSplitClient').default;
    await splitClient.ready();
    const splitNames = ['color_mode', 'display_text', 'ask_ladder'];
    const treatments = splitClient.getTreatments(userKey, splitNames);
    return { pageProps: { treatments, userKey} };
  }
 // return { pageProps: {userKey, color_mode, display_text, ask_ladder} }
    return { pageProps: { treatments: window[FEATURE], userKey } }
};

export default MyApp;