import React from 'react';
import './index.css'
import FilteredList from './FilteredList';


function App() {

  const list = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Alex', age: 17 },
    { id: 4, name: 'Sarah', age: 30 },
  ];


  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-center">
      <FilteredList list={list} />
    </div>
  )
}

export default App;