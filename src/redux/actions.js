import types from './types.js'
import fakeData from '../fake-data/index.json'

const requestCurrentWeatherByZipCode = (zipCode) => ({
  type: types.REQUEST_CURRENT_WEATHER_BY_ZIP_CODE,
  zipCode: zipCode
})

const receiveCurrentWeatherByZipCode = (json) => ({
  type: types.RECEIVE_CURRENT_WEATHER_BY_ZIP_CODE,
  zipCodeWeather: json,
  receivedAt: Date.now()
})

const updateZipCode = (zipCode) => ({
  type: types.UPDATE_ZIP_CODE,
  zipCode: zipCode
})

const fetchCurrentWeatherByZipCode = (zipCode) => {
  return dispatch => {
    dispatch(requestCurrentWeatherByZipCode(zipCode))
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const zipCodeData = fakeData.find(item => {
          return item.zipCode == zipCode
        })
        dispatch(receiveCurrentWeatherByZipCode(zipCodeData))
        resolve()
      }, 1500)
    })
  }
}

export default {
  requestCurrentWeatherByZipCode,
  receiveCurrentWeatherByZipCode,
  fetchCurrentWeatherByZipCode,
  updateZipCode
}