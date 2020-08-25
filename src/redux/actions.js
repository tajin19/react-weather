import types from './types.js'
import fetch from 'cross-fetch'
import RequestBuilderOpenWeatherMap from "../util/requestBuilderOpenWeatherMap"

const requestCurrentWeatherByZipCode = (zipCode) => ({
  type: types.REQUEST_CURRENT_WEATHER_BY_ZIP_CODE,
  zipCode: zipCode
})

const receiveCurrentWeatherByZipCode = (json) => ({
  type: types.RECEIVE_CURRENT_WEATHER_BY_ZIP_CODE,
  zipCodeWeather: json,
  receivedAt: Date.now()
})

const showCurrentWeatherByZipCodeError = (error) => ({
  type: types.SHOW_CURRENT_WEATHER_BY_ZIP_CODE_ERROR,
  error,
  receivedAt: Date.now()
})

const hideCurrentWeatherByZipCodeError = (error) => ({
  type: types.HIDE_CURRENT_WEATHER_BY_ZIP_CODE_ERROR,
  error
})

const updateZipCode = (zipCode) => ({
  type: types.UPDATE_ZIP_CODE,
  zipCode: zipCode
})

const fetchCurrentWeatherByZipCode = (zipCode) => {
  return dispatch => {
    dispatch(requestCurrentWeatherByZipCode(zipCode))
    const requestBuilder = new RequestBuilderOpenWeatherMap()
    const request = requestBuilder.TemperatureByZipCodeUrl(zipCode)
    return fetch(request)
    .then(response => {
      return response.json()
    })
    .then(json => {
      const {
        temp: temperature,
        feels_like: apparentTemperature,
        temp_min: low,
        temp_max: high
      } = json.main

      const zipCodeWeather = {
        temperature,
        apparentTemperature,
        low,
        high
      }
      return dispatch(receiveCurrentWeatherByZipCode(zipCodeWeather))
    })
    .catch(error => {
      dispatch(showCurrentWeatherByZipCodeError(error))
      setTimeout(() => {
        dispatch(hideCurrentWeatherByZipCodeError(error))
      }, 3000)
    })
  }
}

export default {
  requestCurrentWeatherByZipCode,
  receiveCurrentWeatherByZipCode,
  fetchCurrentWeatherByZipCode,
  showCurrentWeatherByZipCodeError,
  hideCurrentWeatherByZipCodeError,
  updateZipCode
}