import React, { useState } from 'react';
import './index.css'
import { LanguageContext } from './LanguageContext';
import DisplayLanguage from './DisplayLanguage';

function App() {
  const [language, setLanguage] = useState('en')

  function handleChangeLanguage(event) {
    setLanguage(event.target.value)
  }
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-center">
        <div className="text-black">
          <select value={language} onChange={handleChangeLanguage}>
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
        </div>  
        <LanguageContext.Provider value={language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    )
}

export default App;