import React from "react";

class TodoList extends React.Component{
    state = {
        toDos: ['Complete Homework', 'Buy Groceries', 'Go for jogging'],
        inputValue: ''
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    addList = () => {
        if(this.state.inputValue) {
            const updatedToDos = [...this.state.toDos, this.state.inputValue];
            this.setState({
                toDos: updatedToDos
            })
        }
    } 

    render() {
        const ulTodos = this.state.toDos.map((todo, index) => (<li key={index}>{todo}</li>))
        return(
            <div>
                <ul>
                    {ulTodos}
                </ul>
                <input 
                type="text" 
                onChange={this.handleInputChange}/>
                <button onClick={this.addList}>Add</button>
            </div>
        )
    }
}

export default TodoList