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
                toDos: updatedToDos,
                inputValue: ''
            })
        }
    } 

    clearList = () => {
        this.setState({
            toDos: []
        })
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
                value={this.state.inputValue}
                onChange={this.handleInputChange}/>
                <div>
                    <button onClick={this.addList}>Add</button>
                    <button onClick={this.clearList}>Reset</button>
                </div>
            </div>
        )
    }
}

export default TodoList