import types from './types'

const INITIAL_STATE = {
  zipCode: '',
  zipCodeWeather: {
    temperature: null,
    apparentTemperature: null,
    high: null,
    low: null
  },
  requestingData: false,
  showErrorPanel: false
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
      if (zipCodeWeather) {
        return {
          ...state,
          zipCodeWeather,
          requestingData: false
        }
      } else {
        return {
          ...state,
          requestingData: false
        }
      }
    }
    case types.SHOW_CURRENT_WEATHER_BY_ZIP_CODE_ERROR: {
      return {
        ...state,
        requestingData: false,
        showErrorPanel: true
      }
    }

    case types.HIDE_CURRENT_WEATHER_BY_ZIP_CODE_ERROR: {
      return {
        ...INITIAL_STATE
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