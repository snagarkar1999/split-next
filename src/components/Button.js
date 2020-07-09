import React, {Component} from 'react'

class Button extends Component {

    constructor() {
        super();
      //this.clickHandler() = this.clickHandler().bind(this);
        //this.state= {startingAmount : 0}
    }

     clickHandler() {
       // this.setState({startingValue: 50})
        //alert('button clicked');
       // console.log('button clicked');
        split?.client().track('button');
         //split?.client().track({this.props.user}, 'user', 'donate button', {this.props.amount});
    }

    render() {
        return(
            <button onClick = {() => this.clickHandler()}> {this.props.amount}</button>
        )

    }

}

export default Button