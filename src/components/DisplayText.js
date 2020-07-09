import React from 'react'

function DisplayText (props) {
    if(props.mode == 'on'){
        return <h1> Please give me money!</h1>
    }
    else if(props.mode == 'off'){
        return <h1> Donate to a worthwhile cause </h1>
    }
    else{
        return <h1> Control </h1>
    }
}

export default DisplayText;