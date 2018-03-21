import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Commits extends Component {
  fetchData = () => {
    this.props.fetchCommits(this.props.userId)
  }

  componentDidMount = () => {
    this.fetchData()
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.userId !== prevProps.userId) {
      this.fetchData()
    }
  }

  render () {
    const {userId, commits, isLoading, error} = this.props

    if (isLoading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{error.response.statusText}</div>
    }

    return (
      <div>
        <h3>Commits of <span>{userId}</span></h3>
        <ul>
          {commits.map(commit => (
            <li key={commit.sha}>
              {commit.commit.message}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

Commits.propTypes = {
  userId: PropTypes.string.isRequired,
  commits: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  fetchCommits: PropTypes.func.isRequired
}

export default Commits
