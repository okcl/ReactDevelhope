import React from 'react';
import './index.css'
import GithubUser from './GithubUser';

function App() {
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-center">
        <GithubUser username={"okcl"} />
      </div>
    )
}

export default App;