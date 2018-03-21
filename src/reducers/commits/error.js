import {COMMITS} from '../../actions/actionTypes'
const initialState = null

export const getError = state => state.commits.error

export default function app (state = initialState, {type, payload}) {
  switch (type) {
    case COMMITS.GET_ALL.FAIL:
      return payload.error
    case COMMITS.GET_ALL.START:
    case COMMITS.GET_ALL.SUCCESS:
      return null
    default:
      return state
  }
}
