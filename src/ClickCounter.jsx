import React from "react";

class ClickCounter extends React.Component {

    state = {
        count: 0
    }

    handleCounterIncrement = () => {
        this.setState(state => {
            return {
                count: state.count + 1,
            }
        })
    }
    
    render () {
        return <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleCounterIncrement}>Increment</button>
        </div>
    }
}

export default ClickCounter