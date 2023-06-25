import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css'
import ShowGithubUser from './ShowGithubUser';


function App() {


  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-center">
      <Routes>
        <Route path="/" element={<ShowGithubUser />} />
        <Route path="/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  )
}

export default App;