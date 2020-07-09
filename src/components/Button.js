import React from 'react'

class Button extends React.Component {
    constructor() {
        super();
        this.state = {startingValue: 10}
    }

     clickHandler = () => {
        this.setState({startingValue: 50})
        alert('button clicked');
        console.log('button clicked');
        split?.client().track('button');
    }

    render(){
        return <div><button onClick = {this.clickHandler}> {this.state.startingValue} </button> </div>
    }

}

export default Button