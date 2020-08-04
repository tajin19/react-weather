import React from 'react'
import './App.css'
import ConnectedInputPanel from './components/ConnectedInputPanel.js'
import ConnectedWeatherPanel from './components/ConnectedWeatherPanel'

function App() {
  return (
    <div>
      <main className="main">
        <ConnectedInputPanel/>
        <ConnectedWeatherPanel/>
      </main>
    </div>
  )
}

export default App
