import _mapKeys from 'lodash/mapKeys'
import {COMMITS} from '../../../actions/actionTypes'
const initialState = {}

function getByIdFromResponse (items) {
  return _mapKeys(items, item => item.sha)
}
export default function app (state = initialState, {type, payload}) {
  switch (type) {
    case COMMITS.GET_ALL.SUCCESS:
      return {
        ...state,
        ...getByIdFromResponse(payload.response.items)
      }
    default:
      return state
  }
}
