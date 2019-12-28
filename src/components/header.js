import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Anthony Rende</Link>
      </div>
        <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/work">My Work</Link>
            <Link to="/contact">Contact Me</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
