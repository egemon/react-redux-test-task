import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.scss'

const Header = props => {
  return (
    <div className={style.appHeader}>
      <h2>React Redux Test task</h2>
      <ul className={style.menu} >
        <li>
          <NavLink exact activeClassName={style.active} className={style.menuLink} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={style.active} className={style.menuLink} to='/user-select'>
            User select
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
