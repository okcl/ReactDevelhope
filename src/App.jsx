import React from 'react';
import './index.css'
import ClickCounter from './ClickCounter';
import Counter from './Counter';

function App() {
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-center">
        <Counter />
      </div>
    )
}

export default App;