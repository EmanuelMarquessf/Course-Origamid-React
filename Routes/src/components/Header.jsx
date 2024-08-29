import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav style={{display: 'flex', gap: '2rem'}}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="login">login</Link>
        <Link to="contact">Contact</Link>
        <span>Navbar using link - this tag not set active atribute on click</span>
      </nav>
      <hr />
      <nav style={{display: 'flex', gap: '2rem'}}>
        <NavLink activeStyle={{backgroundColor: 'tomato'}} to="/">Home</NavLink>
        <NavLink activeStyle={{text: 'blue'}} to="about">About</NavLink>
        <NavLink to="login">login</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <span>Navbar using link - this tag set active atribute on click</span>
      </nav>
    
    </>
  )
}

export default Header