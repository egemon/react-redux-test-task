import _uniq from 'lodash/uniq'
import {COMMITS} from '../../../actions/actionTypes'

const initialState = []

export default function app (state = initialState, {type, payload}) {
  switch (type) {
    case COMMITS.GET_ALL.SUCCESS:
      return _uniq([
        ...state,
        ...payload.response.items.map(item => item.sha)
      ])
    default:
      return state
  }
}
