import React from "react";
import Age from "./Age";

export class Welcome extends React.Component {
    render () {
        var propName = "Neo"
        if(this.props.name){
            propName = this.props.name
        }
        return (
            <div class="message">
                <p> Hello, {propName} !</p>
                <Age age={this.props.age}/>
            </div>
        )
    }
}

export default Welcome