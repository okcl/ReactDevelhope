import React from "react";

export class Welcome extends React.Component {
    render () {
        var propName = "Neo"
        if(this.props.name){
            propName = this.props.name
        }
        return (
            <div class="message">
                <p> Hello, {propName} !</p>
                <p>Your age is {this.props.age}</p>
            </div>
        )
    }
}

export default Welcome