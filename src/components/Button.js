import React from 'react'

class Button extends React.Component {
    constructor() {
        super();
        this.state = {startingValue: 10}
    }

    render(){
        return <div><button onClick = {() => this.clickHandler()}> {this.state.startingValue} </button> </div>
    }

}

function clickHandler() {
    alert('button clicked');
    console.log('button clicked');
    split?.client().track('button');
}
export default Button