import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component{

    state = {
        username: ''
    }

    usernameRealtimeChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render(){
        return <div >
            <Welcome name={this.state.username}/>
            <input onChange={this.usernameRealtimeChange}/>
        </div>
    }
}

export default InteractiveWelcome