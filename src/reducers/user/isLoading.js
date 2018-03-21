import {USER} from '../../actions/actionTypes'
const initialState = false

export const getIsLoading = state => state.user.isLoading

export default function app (state = initialState, {type}) {
  switch (type) {
    case USER.GET_CURRENT.START:
      return true
    case USER.GET_CURRENT.FAIL:
    case USER.GET_CURRENT.SUCCESS:
      return false
    default:
      return state
  }
}
