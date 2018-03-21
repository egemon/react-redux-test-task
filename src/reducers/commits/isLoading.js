import {COMMITS} from '../../actions/actionTypes'
const initialState = false

export const getIsLoading = state => state.commits.isLoading
export const getError = state => state.commits.meta.error

export default function app (state = initialState, {type}) {
  switch (type) {
    case COMMITS.GET_ALL.START:
      return true
    case COMMITS.GET_ALL.FAIL:
    case COMMITS.GET_ALL.SUCCESS:
      return false
    default:
      return state
  }
}
