import React from 'react';
import './index.css'
import GithubUserList from './GithubUserList';

function App() {
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-black text-center">
        <GithubUserList />
      </div>
    )
}

export default App;