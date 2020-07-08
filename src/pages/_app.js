import React from 'react'
import App from 'next/app'
import { SplitFactory } from '@splitsoftware/splitio'
import { FEATURE } from '../../constants'

class MyApp extends App {
  constructor() {
    super();
    this.state = {
      color_mode : 'light mode',
      display_text : 'Please Donate',
      ask_ladder : '10'
    }
  }

  componentDidMount() {

    const { userKey, treatment, color_mode } = this.props.pageProps;
    // Save the treatment evaluated on server-side on the global `window` object, to use when navigating among pages on client-side.
    // You could also save it as a cookie, or in localStorage.
    if (treatment) window[FEATURE] = treatment;

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

function lightDarkMode(treatments) {
  if(treatments.color_mode == 'on'){
    return <div>
      <style global jsx>{`
       h1 { 
        color : white;
        }
       p { 
        color : white;
        } 
        body {
          background: black;
        }
      `}</style>
      <h1> Dark Mode</h1>
    </div>
  }
  else if(treatments.color_mode == 'off'){
    return <div>
      <style global jsx>{`
       h1 { 
        color : black;
        }
       p { 
        color : black;
        } 
        body {
          background: white;
        }
      `}</style>
      <h1> Light Mode</h1>
    </div>
  }
}

MyApp.getInitialProps = async function (appContext) {
 // const userKey = appContext.ctx.query.userkey || 'anonymous';
  const userKey = Math.floor(Math.random() * 1000000) + 1 ;
  const splitClient = require('../../server/getServerSideSplitClient').default;
  const splitNames = ['color_mode', 'display_text', 'ask_ladder'];
  const treatments = splitClient.getTreatments(userKey, splitNames);
  let color_mode = lightDarkMode(treatments);
  console.log(treatments.color_mode, userKey);
 // const treatment = splitClient.getTreatment(userKey, FEATURE);

  const treatment = 'on';

  // if (appContext.ctx.req) {
  //   // This block runs only on the server-side,
  //   // so run here Split SDK for Node (https://help.split.io/hc/en-us/articles/360020564931-Node-js-SDK).
  //
  //   await splitClient.ready();
  //
  //   console.log(`treatment '${treatment}' for feature '${FEATURE}' and user key '${userKey}'`);
  //   let text = treatmentText(treatment);
  //
  //   return { pageProps: { treatment, userKey, text} };
  // }

  // This branch runs only on the client-side
  return { pageProps: { treatment, userKey, color_mode} }
};

export default MyApp;