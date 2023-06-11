import React from 'react';
import './index.css'
import DisplayLanguage from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';

class App extends React.Component{

  state = {
    language: 'en'
  }

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value
    })
  }

  render() {
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-center">
        <header>
          <div>
            <select 
            value={this.state.language}
            onChange={this.handleLanguageChange}
            className='bg-gray-700 text-white rounded py-2 px-4 border-none'>
              <option value="en">🇬🇧 English</option>
              <option value="it">🇮🇹 Italiano</option>
            </select>
            <LanguageContext.Provider value={this.state.language}>
              <DisplayLanguage />
            </LanguageContext.Provider>
          </div>
        </header>
      </div>
    );
  }
}

export default App;