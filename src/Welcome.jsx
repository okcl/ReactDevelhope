import React from "react";

export class Welcome extends React.Component {
    render () {
        return <h2> Hello {this.props.name} !</h2>
    }
}

export default Welcome