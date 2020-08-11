import React, { Component } from 'react'

class WeatherPanel extends Component {

  render() {
    const {apparentTemperature, high, low, requestingData, temperature} = this.props
    let weather
    if (requestingData) {
      weather = <div className="loading-wrapper">
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      </div>

    } else if (temperature && apparentTemperature && high && low) {
      weather = <div className="temperature-side">
                  <div className="high-low-line">
                    <span className="high-temp-span">{ Math.round(high) }&deg;</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span className="low-temp-span">{ Math.round(low) }&deg;</span>
                  </div>
                  <div className="main-temp-line">{ Math.round(temperature) }<sup className="main-unit-indicator">&deg;F</sup></div>
                  <div className="apparent-temp-line">LIKE <span>{ Math.round(apparentTemperature) }&deg;</span></div>
                </div>

    } else {
      weather = <div></div>
    }
    return (
      <div className="weather-panel">
        {weather}
      </div>
    )
  }
}

export default WeatherPanel
