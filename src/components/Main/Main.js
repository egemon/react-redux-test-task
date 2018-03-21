import React, { Component } from 'react'
import Home from 'components/Home/Home'
import UserSelect from 'components/UserSelect/UserSelect'
import UserList from '../Users/UserList/UserList'
import UserDetailsContainer from '../Users/UserDetails/UserDetailsContainer'
import {Switch, Route} from 'react-router-dom'
import style from './main.scss'

class Main extends Component {
  render () {
    return (
      <div className={style.container}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user-select' component={UserSelect} />
          <Route exact path='/users' component={UserList} />
          <Route exact path='/users/:userId' component={UserDetailsContainer} />
        </Switch>
      </div>
    )
  }
}

export default Main
