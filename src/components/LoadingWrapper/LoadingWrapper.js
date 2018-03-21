import React, { Component } from 'react'
import PropTypes from 'prop-types'

const LoadingWrapper = ComponentToWrap => {
  class WrappedComponent extends Component {
    render () {
      const {isLoading, error, ...data} = this.props

      if (isLoading) {
        return <div>Loading...</div>
      }
      if (error) {
        return <div>{error.response.statusText}</div>
      }

      return <ComponentToWrap {...data} />
    }
  }

  WrappedComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  return WrappedComponent
}

export default LoadingWrapper
