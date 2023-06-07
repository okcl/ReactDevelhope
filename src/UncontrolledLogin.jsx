import React from "react"

class MyUncontrolledForm extends React.Component{
    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }


    render() {
        return(
            <div>
                <h3>Uncontrolled Form</h3>

                <form onSubmit={this.handleFormSubmit} className="login">
                    <input name="username" autoFocus/>
                    <input name="password" type="password" />
                    <input name="remember" type="checkbox"/>

                    <div>
                        <button type="submit">Login</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default MyUncontrolledForm