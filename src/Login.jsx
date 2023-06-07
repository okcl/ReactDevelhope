import React from "react";

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
        buttonEnabled: false
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState ({
            [name]: type === "checkbox" ? checked : value,
            buttonEnabled: true
        })
    }

    render() {
        return <div className="login">
            <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
            <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}/> 
            <button disabled={!this.state.buttonEnabled} onClick={() => {this.props.onLogin(this.state)}}>Login</button>
        </div>
    }
}

export default Login