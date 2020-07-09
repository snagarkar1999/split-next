import React from 'react'
import Button from "./Button";

function AskLadder (props) {
    //console.log("inside ask ladder function", props);
    if(props.mode == 'on'){
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
    else if(props.mode == 'off'){
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

export default AskLadder;