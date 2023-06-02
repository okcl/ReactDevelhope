import React from "react";

class Counter extends React.Component{
    state = {
        count: this.props.initalValue ?? 0
    }

    constructor(props) {
        super(props)
        
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementBy ?? 1),
                }
            })
        }, this.props.timeout ?? 1000)
    }

    
    render() {
        return <div>
            <h1>Count: {this.state.count}</h1>
        </div>
    }
}

export default Counter