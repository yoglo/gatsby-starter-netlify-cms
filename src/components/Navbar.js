import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import ghclogo from '../img/GlasgowHandballHeader.png'

const Navbar = () => (
  <nav className="navbar is-transparent is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={ghclogo} alt="Kaldi" style={{ width: '65px' }} />
          </figure>
        </Link>
        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/team">
            Team
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
        </div>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default Navbar
