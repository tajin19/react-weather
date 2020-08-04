import React, { Component } from 'react'

class WeatherPanel extends Component {

  render() {
    return (
      <div className="weather-panel">
        <div className="temperature-side">
          <div className="high-low-line"><span>100&deg;</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>120&deg;</span></div>
          <div className="main-temp-line">100<sup>&deg;F</sup></div>
          <div className="apparent-temp-line">LIKE <span>110&deg;</span></div>
        </div>
      </div>
    )
  }
}

export default WeatherPanel
