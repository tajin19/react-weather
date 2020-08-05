import types from './types'

const INITIAL_STATE = {
  requestingData: false,
  zipCode: '',
  zipCodeWeather: {
    temperature: null,
    apparentTemperature: null,
    high: null,
    low: null
  }
}

const homeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.FETCH_CURRENT_WEATHER_BY_ZIP_CODE: {
      return {
        ...state,
        requestingData: true
      }
    }
    case types.REQUEST_CURRENT_WEATHER_BY_ZIP_CODE: {
      return {
        ...state,
        requestingData: true
      }
    }
    case types.RECEIVE_CURRENT_WEATHER_BY_ZIP_CODE: {
      const { zipCodeWeather } = action
      const { data } = zipCodeWeather.response
      if (data) {
        let temperature = null
        let apparentTemperature = null
        let high = null
        let low = null
        const temperatureItem = data.find((item) => {
          return item.parameter.startsWith('t_0')
        })
        if (temperatureItem) {
          temperature = temperatureItem.coordinates[0].dates[0].value
        }
        const apparentTemperatureItem = data.find((item) => {
          return item.parameter.startsWith('t_apparent')
        })
        if (apparentTemperatureItem) {
          apparentTemperature = apparentTemperatureItem.coordinates[0].dates[0].value
        }
        const highItem = data.find((item) => {
          return item.parameter.startsWith('t_max')
        })
        if (highItem) {
          high = highItem.coordinates[0].dates[0].value
        }
        const lowItem = data.find((item) => {
          return item.parameter.startsWith('t_min')
        })
        if (lowItem) {
          low = lowItem.coordinates[0].dates[0].value
        }
        const newWeatherObject = {
          temperature,
          apparentTemperature,
          high,
          low
        }
        return {
          ...state,
          zipCodeWeather: newWeatherObject,
          requestingData: false
        }
      } else {
        return {
          ...state,
          requestingData: false
        }
      }
    }
    case types.UPDATE_ZIP_CODE: {
      const { zipCode } = action
      return {
        ...state,
        zipCode
      }
    }
    //TODO: add other cases here
    default: return state
  }
}

export default homeReducer