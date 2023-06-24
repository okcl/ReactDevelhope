import React from 'react';
import './index.css'
import CarDetails from './CarDetails';

function App() {
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-black text-center">
        <CarDetails initialData={{model:"Tesla Model S",year:"2022",color:"Red"}} />
      </div>
    )
}

export default App;