import React from "react";

class Welcome extends React.Component {
    render () {
        return <h2> Hello, {this.props.name} !</h2>
    }
}

Welcome.defaultProps = {
    name: "Neo"
  };

export default Welcome