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
         let value = this.props.amount;
         let userNum = this.props.user;
         let treatment = this.props.mode;
         let properties = { user : userNum , amount : value, treatment: treatment};
         console.log(properties);
         split?.client().track('button', value, properties);
        // console.log(this.props.user);
       // split?.client().track(userNum, 'user', 'donation_button', value, null );
       // split?.client().track(userNum, 'donation_button', 'donate_button', value, null);
         //split?.client().track({this.props.user}, 'user', 'donate button', {this.props.amount});
    }

    render() {
        return(
            <button onClick = {() => this.clickHandler()}> ${this.props.amount}</button>
        )

    }

}

export default Button