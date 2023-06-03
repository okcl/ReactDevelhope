import React from "react";

class ClickTracker extends React.Component{

    state = {
        trackerMessage: 'Press a button!'
    }

    buttonFinder = (event) => {
        let eventButton = event.target.textContent;

        this.setState({
            trackerMessage: `You pressed ${eventButton}!`
        })
    }
    
    render() {
        return <div>
            <h1>{this.state.trackerMessage}</h1>
            <button onClick={this.buttonFinder}>Button 1</button>
            <button onClick={this.buttonFinder}>Button 2</button>
            <button onClick={this.buttonFinder}>Button 3</button>
        </div>
    }
}

export default ClickTracker