import React from 'react'

function Button() {
    function clickHandler() {
         alert('button clicked')
        console.log('button clicked')
        split?.client().track('button');
    }

    return(
        <div>
            <button onClick = {clickHandler}> Donate </button>
        </div>
    )
}

export default Button