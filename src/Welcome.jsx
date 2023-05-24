import React from "react";
import Age from "./Age";

export class Welcome extends React.Component {
    render () {
        var propName = "Neo"; //default age variable
        var isAgePresent = false; //default age variable
        var isInScope = false; //default age scope variable
        var isJohn = false;

        if(this.props.age){
            isAgePresent = true;
        }
        if(this.props.age>18 && this.props.age<65){
            isInScope = true;
        }
        if(this.props.name){
            propName = this.props.name;
        }

        if (propName.props.children.toLowerCase() === "john"){
            isJohn = true;
        }

        return (
            <div class="message">
                <p> Hello, {propName} !</p>
                {((isAgePresent && isInScope)&& isJohn) &&<Age age={this.props.age} />} 
            </div> 
        )
    }
}

export default Welcome