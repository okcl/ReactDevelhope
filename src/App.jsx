import './App.css';
import Login from './Login';

function App() {
  const onLogin = (state) => {
    console.log(state);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Login onLogin={onLogin}/>
      </header>
    </div>
  );
}

export default App;