import React, { Component } from 'react'

class WeatherPanel extends Component {

  render() {
    const {temperature, apparentTemperature, high, low} = this.props
    let weather
    if (temperature && apparentTemperature && high && low) {
      weather = <div className="temperature-side">
                    <div className="high-low-line"><span>{ Math.round(high) }&deg;</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{ Math.round(low) }&deg;</span></div>
                    <div className="main-temp-line">{ Math.round(temperature) }<sup>&deg;F</sup></div>
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
