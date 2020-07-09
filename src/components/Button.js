import React from 'react'

class Button extends React.Component {

    constructor() {
        super();
      //  this.clickHandler() = this.clickHandler().bind(this);
        this.state= {amount: 10}
    }

     clickHandler = () => {
       // this.setState({startingValue: 50})
        //alert('button clicked');
        console.log('button clicked');
        //split?.client().track('button');
         //split?.client().track('button', {this.state.amount});
    }

    render(){
       // return <div><button onClick = {this.clickHandler}> {state.amount} </button> </div>
    }

}

export default Button