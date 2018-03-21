import {combineReducers} from 'redux'
import byId from './byId'
import allIds from './allIds'

export function getUserCommits (state, userId) {
  const {allIds, byId} = state.commits.data
  return allIds.map(commitId => byId[commitId])
    .filter(commit => commit.author.login === userId)
}

export default combineReducers({
  byId,
  allIds
})
