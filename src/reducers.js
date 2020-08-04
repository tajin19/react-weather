import { combineReducers } from 'redux'
import  homeReducer  from './redux'

const rootReducer = combineReducers({
  home: homeReducer
})

export default rootReducer