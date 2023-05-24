import React from "react";
import Age from "./Age";

export class Welcome extends React.Component {
    render () {
        var propName = "Neo" //default age variable
        var isAgePresent = false //default age variable
        if(this.props.age){
            isAgePresent = true;
        }
        var isInScope = false //default age scope variable
        if(this.props.age>18 && this.props.age<65){
            isInScope = true;
        }
        if(this.props.name){
            propName = this.props.name
        }
        return (
            <div class="message">
                <p> Hello, {propName} !</p>
                {(isAgePresent && isInScope) &&<Age age={this.props.age} />} 
            </div> 
        )
    }
}

export default Welcome