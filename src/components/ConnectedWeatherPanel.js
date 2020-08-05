import { connect } from 'react-redux'
import WeatherPanel from './WeatherPanel.js'

const mapStateToProps = (state) => {
  if (state.home.zipCodeWeather) {
    const {
      apparentTemperature,
      high,
      low,
      temperature
    } = state.home.zipCodeWeather
    const { requestingData } = state.home
    return {
      apparentTemperature,
      high,
      low,
      requestingData,
      temperature
    }
  } else {
    return {
      apparentTemperature: null,
      high: null,
      low: null,
      requestingData: false,
      temperature: null
    }
  }
}

const ConnectedWeatherPanel = connect(
  mapStateToProps
)(WeatherPanel)

export default ConnectedWeatherPanel