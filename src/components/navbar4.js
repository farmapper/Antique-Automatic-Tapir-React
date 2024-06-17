import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <header className="navbar4-container">
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar4-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links">
            <Link to="/" className="navbar4-link1 thq-body-small thq-link">
              {props.link1}
            </Link>
            <Link to="/about" className="navbar4-link2 thq-body-small thq-link">
              {props.link2}
            </Link>
            <a
              href="https://blog.maisaspace.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar4-link3 thq-body-small thq-link"
            >
              {props.link3}
            </a>
            <Link
              to="/resources"
              className="navbar4-link4 thq-body-small thq-link"
            >
              {props.link4}
            </Link>
            <Link
              to="/contact"
              className="navbar4-link5 thq-body-small thq-link"
            >
              {props.link5}
            </Link>
          </nav>
          <div className="navbar4-buttons">
            <button className="navbar4-action1 thq-button-filled thq-button-animated">
              <span className="thq-body-small">Action 1</span>
            </button>
            <button className="navbar4-action2 thq-button-outline thq-button-animated">
              <span className="thq-body-small">Action 2</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links1">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <span className="thq-body-small thq-link">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar4-buttons1">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  action1: 'Action 1',
  link5: 'Contact Us',
  link1: 'Home',
  logoAlt: "Maisa's Space",
  logoSrc: '/infinity8-1500h.jpeg',
  link3: 'Blog',
  link4: 'Resources',
  action2: 'Action 2',
  link2: 'About Maisa',
}

Navbar4.propTypes = {
  action1: PropTypes.string,
  link5: PropTypes.string,
  link1: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  action2: PropTypes.string,
  link2: PropTypes.string,
}

export default Navbar4
