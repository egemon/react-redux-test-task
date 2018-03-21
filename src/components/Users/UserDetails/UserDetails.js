import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommitsContainer from './Commits/CommitsContainer'

class UserDetails extends Component {
  fetchData = () => {
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentDidMount = () => {
    this.fetchData()
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.fetchData()
    }
  }

  render () {
    const {user, isLoading, error} = this.props

    if (isLoading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{error.response.statusText}</div>
    }

    return user && (
      <div>
        <h2>UserDetails for <span>{user.name}</span></h2>
        <img src={user.avatar_url} alt='avatarUrl' />
        {user.login && <CommitsContainer userId={user.login} />}
      </div>
    )
  }
}

UserDetails.propTypes = {
  user: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  fetchUser: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object
  }).isRequired
}

export default UserDetails
