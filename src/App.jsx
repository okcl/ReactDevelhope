import './App.css';
import TodoList from './TodoList';
function App() {
  const addTodo = (array, removeItem) => {
    return array.map((todo, index) => (
      <li key={index}>
          {todo}
          <button id="smlBtn" onClick={() => removeItem(index)}>Remove</button>
      </li>
))}
  return (
    <div className="App">
      <header className="App-header">
        <TodoList addTodo={addTodo}/>
      </header>
    </div>
  );
}

export default App;