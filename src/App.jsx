import React from 'react';
import './index.css'
import HookCounter from './HookCounter';

function App() {
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-black text-center">
        <HookCounter />
      </div>
    )
}

export default App;