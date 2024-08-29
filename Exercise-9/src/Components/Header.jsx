import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles/Header.module.css'

function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header