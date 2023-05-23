import React from "react";

export class Welcome extends React.Component {
    render () {
        var propName = "Neo"
        if(this.props.name){
            propName = this.props.name
        }
        return <h2> Hello, {propName} !</h2>
    }
}

export default Welcome