import {connect} from 'react-redux'
import * as actions from '../../../actions/userActions'
import {getUser} from '../../../reducers/user/data'
import {getIsLoading} from '../../../reducers/user/isLoading'
import {getError} from '../../../reducers/user/error'
import UserDetailsWithFetch from './UserDetails'

export default connect(state => ({
  user: getUser(state),
  isLoading: getIsLoading(state),
  error: getError(state)
}), actions)(UserDetailsWithFetch)
