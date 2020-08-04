import React from 'react'
//import logo from './logo.svg'
import ConnectedInputPanel from './components/ConnectedInputPanel.js'
import './App.css'

function App() {
  return (
        <div>
          <main className="main">
            <ConnectedInputPanel/>
            <div className="weather-panel">
              &nbsp;
            </div>
          </main>
        </div>
  )
}

export default App
