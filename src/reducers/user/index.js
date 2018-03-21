import {combineReducers} from 'redux'
import data from './data'
import error from './error'
import isLoading from './isLoading'

export default combineReducers({
  data,
  error,
  isLoading
})
