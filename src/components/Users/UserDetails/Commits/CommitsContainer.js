import {connect} from 'react-redux'
import * as actions from '../../../../actions/commitActions'
import {getUserCommits} from '../../../../reducers/commits/data'
import {getIsLoading} from '../../../../reducers/commits/isLoading'
import {getError} from '../../../../reducers/commits/error'
import Commits from './Commits'

export default connect((state, {userId}) => {
  return ({
    userId,
    commits: getUserCommits(state, userId),
    isLoading: getIsLoading(state),
    error: getError(state)
  })
}, actions)(Commits)
