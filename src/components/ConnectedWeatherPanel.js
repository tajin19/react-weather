import { connect } from 'react-redux'
import WeatherPanel from './WeatherPanel.js'

const mapStateToProps = (state) => {
  if (state.home.zipCodeWeather) {
    const {
      temperature,
      apparentTemperature,
      high,
      low
    } = state.home.zipCodeWeather
    return {
      temperature,
      apparentTemperature,
      high,
      low
    }
  } else {
    return {
      temperature: null,
      apparentTemperature: null,
      high: null,
      low: null
    }
  }
}

const ConnectedWeatherPanel = connect(
  mapStateToProps
)(WeatherPanel)

export default ConnectedWeatherPanel