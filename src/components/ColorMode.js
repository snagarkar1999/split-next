import React from 'react'

function ColorMode (props) {
  //  console.log("inside color mode function" , props);
    if(props.mode == 'on'){
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
    else if(props.mode == 'off'){
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

// const ColorMode = () => <h1> Color Mode </h1>
export default ColorMode;
