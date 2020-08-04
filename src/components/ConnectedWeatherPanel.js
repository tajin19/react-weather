import { connect } from 'react-redux'
import WeatherPanel from './WeatherPanel.js'

const mapStateToProps = (state) => ({
  temperature: state.temperature,
  apparentTemperature: state.zipCode,
  high: state.high,
  low: state.low,
  weatherIcon: state.icon
})

const ConnectedWeatherPanel = connect(
  mapStateToProps
)(WeatherPanel)

export default ConnectedWeatherPanel