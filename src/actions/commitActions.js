import {getGithubApi} from '../services/Api'
import {COMMITS} from './actionTypes'
const api = getGithubApi()

export const startCommitLoading = (userId) => ({
  type: COMMITS.GET_ALL.START,
  payload: {userId}
})

export const failCommitLoading = (error) => ({
  type: COMMITS.GET_ALL.FAIL,
  payload: {error}
})

export const successCommitLoading = (response) => ({
  type: COMMITS.GET_ALL.SUCCESS,
  payload: {response}
})

export const fetchCommits = userId => dispatch => {
  dispatch(startCommitLoading(userId))
  return api.get(`search/commits?q=author:${userId}`).then(
    response => dispatch(successCommitLoading(response)),
    err => dispatch(failCommitLoading(err))
  )
}
