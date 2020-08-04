import React, { Component } from 'react'
import ConnectedTextInput from './ConnectedTextInput.js'
//import '../App.css'

class InputPanel extends Component {

  handleFetchButtonClick = () => {
    debugger
    this.props.fetchCurrentWeatherByZipCode(this.props.zipCode)
  }

  render() {
    return (
      <div className="input-panel">
        <div className="outer-content">
          <div className="overlay-content">
            <div className="content">
              <h2 className="weather-header">Current Weather</h2>
              <div className="weather-input-row">
                <div className="zipCode-input-label">zip code</div>
                <div><ConnectedTextInput /></div>
                <div>
                  <button onClick={this.handleFetchButtonClick}>FETCH</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InputPanel
