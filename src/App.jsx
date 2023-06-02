import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter initalValue={20} incrementBy={2} timeout={500}/>
      </header>
    </div>
  );
}

export default App;
