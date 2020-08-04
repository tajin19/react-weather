import types from './types'

const INITIAL_STATE = {
  temperature: null,
  zipCode: null
}

const homeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.FETCH_CURRENT_WEATHER_BY_ZIP_CODE: {
      debugger
      const { temperature } = action
      debugger
      //const { count } = state
      return {
        ...state,
        temperature
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