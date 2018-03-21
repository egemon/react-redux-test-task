import React, { Component } from 'react'
import Header from 'components/Header'
import Main from 'components/Main/Main'
import style from './app.scss'

class App extends Component {
  render () {
    return (
      <div className={style.App}>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App
