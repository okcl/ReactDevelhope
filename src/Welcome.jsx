import React from "react";
import Age from "./Age";

export class Welcome extends React.Component {
    render () {
        var propName = "Neo" //default age variable
        var isAgePresent = false //default age variable
        if(this.props.age){
            isAgePresent = true;
        }
        if(this.props.name){
            propName = this.props.name
        }
        return (
            <div class="message">
                <p> Hello, {propName} !</p>
                {isAgePresent && <Age age={this.props.age} />}
            </div> 
        )
    }
}

export default Welcome