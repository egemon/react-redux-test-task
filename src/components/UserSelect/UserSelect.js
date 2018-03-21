import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class UserSelect extends Component {
  constructor (props) {
    super(props)
    this.state = {username: ''}
  }
  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.history.push(`/users/${this.state.username}`)
  }
  onUserNameChange = (event) => {
    this.setState({username: event.target.value})
  }
  render () {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>Please type username below</div>
        <input type='text' onChange={this.onUserNameChange} />
        <button>Go to details</button>
      </form>
    )
  }
}

UserSelect.propTypes = {
  history: PropTypes.object.isRequired
}

const UserSelectWithRoute = withRouter(UserSelect)

export default UserSelectWithRoute
