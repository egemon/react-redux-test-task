import {getGithubApi} from '../services/Api'
import {USER} from './actionTypes'
const api = getGithubApi()

export const startUserLoading = (userId) => ({
  type: USER.GET_CURRENT.START,
  payload: {userId}
})

export const successUserLoading = (user) => ({
  type: USER.GET_CURRENT.SUCCESS,
  payload: {user}
})

export const failUserLoading = (error) => ({
  type: USER.GET_CURRENT.FAIL,
  payload: {error}
})

export const fetchUser = userId => dispatch => {
  dispatch(startUserLoading(userId))
  return api.get(`users/${userId}`).then(
    user => dispatch(successUserLoading(user)),
    err => dispatch(failUserLoading(err))
  )
}
