import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = () => {
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <span>{}</span>
    </nav>
  )
}

export default Navbar