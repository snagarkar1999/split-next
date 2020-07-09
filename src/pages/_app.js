import React from 'react'
import App from 'next/app'
import { SplitFactory } from '@splitsoftware/splitio'
import { FEATURE } from '../../constants'
import Button from "../components/Button";

class MyApp extends App {

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

function colorMode(treatments) {
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
      <p> Dark Mode</p>
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
      <p> Light Mode</p>
    </div>
  }
  else {
    return <div>
      <p> Control </p>
    </div>
  }
}

function displayText(treatments){
  if(treatments.display_text == 'on'){
    return <h1> Please give me money!</h1>
  }
  else if(treatments.display_text == 'off'){
    return <h1> Donate to a worthwhile cause </h1>
  }
  else{
    return <h1> Control </h1>
  }
}

function askLadder(treatments){
  if(treatments.ask_ladder == 'on'){
    return <div>
      {/*<Button />*/}
      {/*<button> $10 </button>*/}
      <button> $15 </button>
      <button> $20 </button>
      <button> $40 </button>
      <button> $80 </button>
      <button> $150 </button>
    </div>
  }
  else if(treatments.ask_ladder == 'off'){
    return <div>
      <button> $50 </button>
      <button> $80 </button>
      <button> $100 </button>
      <button> $200 </button>
      <button> $400 </button>
      <button> $750 </button>
    </div>
  }
  else
    return <h1> Control </h1>
}

MyApp.getInitialProps = async function (appContext) {
  if (appContext.ctx.req) {
    const userKey = Math.floor(Math.random() * 1000000) + 1;
    const splitClient = require('../../server/getServerSideSplitClient').default;
    await splitClient.ready();
    const splitNames = ['color_mode', 'display_text', 'ask_ladder'];
    const treatments = splitClient.getTreatments(userKey, splitNames);
    const color_mode = colorMode(treatments);
    const display_text = displayText(treatments);
    const ask_ladder = askLadder(treatments);
    //console.log(treatments, userKey);
    return { pageProps: { treatments, userKey} };
  }
 // return { pageProps: {userKey, color_mode, display_text, ask_ladder} }
    return { pageProps: { treatments: window[FEATURE], userKey } }
};

export default MyApp;