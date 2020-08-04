import types from './types.js';
//import RequestBuilder from "../util/requestBuilder";
//import fetch from "cross-fetch";
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

// const fetchCurrentWeatherByZipCode = (zipCode = 92071) => {
//   debugger
//   return dispatch => {
//     dispatch(requestCurrentWeatherByZipCode(zipCode))
//     const requestBuilder = new RequestBuilder()
//     const request = requestBuilder.BuildRequestForTemperatureForZipCode(zipCode)
//     return fetch(request)
//     .then(response => response.json())
//     .then(json => {
//       dispatch(receiveCurrentWeatherByZipCode(json))
//     })
//     .catch((error) => {
//       console.error(error)
//     })
//   }
// }

const fetchCurrentWeatherByZipCode = (zipCode = 92071) => {
  debugger
  return dispatch => {
      dispatch(requestCurrentWeatherByZipCode(zipCode))
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        debugger
        const zipCodeData = fakeData.find(item => item.zipCode === zipCode)
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