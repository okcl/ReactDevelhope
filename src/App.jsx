import './App.css';
import Welcome from './Welcome.jsx';

function App() {
  let name = <strong>John</strong>
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name={name} age="17"/>
      </header>
    </div>
  );
}

export default App;
