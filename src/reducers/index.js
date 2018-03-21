import {combineReducers} from 'redux'
import user from './user'
import commits from './commits'

export default combineReducers({
  user,
  commits
})
