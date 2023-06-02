import React from "react";
import CounterDisplay from "./CounterDisplay";

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
            <CounterDisplay countState={this.state.count}/>
        </div>
    }
}

export default Counter