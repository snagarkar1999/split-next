import React from 'react'
import Button from "./Button";

function AskLadder (props) {
    //console.log("inside ask ladder function", props);
    if(props.mode == 'on'){
        return <div>
            <Button amount = '$10' user = {props.userKey} />
            <Button amount = '$15' user = {props.userKey} />
            <Button amount = '$20' user = {props.userKey} />
            <Button amount = '$40' user = {props.userKey} />
            <Button amount = '$80' user = {props.userKey} />
            <Button amount = '$150' user = {props.userKey} />
        </div>
    }
    else if(props.mode == 'off'){
        return <div>
            <Button amount = '$50' user = {props.userKey} />
            <Button amount = '$80' user = {props.userKey} />
            <Button amount = '$100' user = {props.userKey} />
            <Button amount = '$200' user = {props.userKey} />
            <Button amount = '$400' user = {props.userKey} />
            <Button amount = '$750' user = {props.userKey} />
        </div>
    }
    else
        return <h1> Control </h1>
}

export default AskLadder;