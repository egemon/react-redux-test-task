import {USER} from '../../actions/actionTypes'
const initialState = null
export const getUser = state => state.user.data

export default function app (state = initialState, {type, payload}) {
  switch (type) {
    case USER.GET_CURRENT.START:
    case USER.GET_CURRENT.FAIL:
      return null
    case USER.GET_CURRENT.SUCCESS:
      return payload.user
    default:
      return state
  }
}
