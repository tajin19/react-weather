import React, { Component } from 'react'

class WeatherPanel extends Component {

  render() {
    const {temperature, apparentTemperature, high, low} = this.props
    return (
      <div className="weather-panel">
        <div className="temperature-side">
          <div className="high-low-line"><span>{ Math.round(high) }&deg;</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{ Math.round(low) }&deg;</span></div>
          <div className="main-temp-line">{ Math.round(temperature) }<sup>&deg;F</sup></div>
          <div className="apparent-temp-line">LIKE <span>{ Math.round(apparentTemperature) }&deg;</span></div>
        </div>
      </div>
    )
  }
}

export default WeatherPanel
