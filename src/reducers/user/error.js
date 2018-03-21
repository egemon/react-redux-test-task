import {USER} from '../../actions/actionTypes'
const initialState = null

export const getError = state => state.user.error

export default function app (state = initialState, {type, payload}) {
  switch (type) {
    case USER.GET_CURRENT.FAIL:
      return payload.error
    case USER.GET_CURRENT.START:
    case USER.GET_CURRENT.SUCCESS:
      return null
    default:
      return state
  }
}
