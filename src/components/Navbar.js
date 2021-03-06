import React from 'react'
import { Link } from 'gatsby'

const fontWeight = '700'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo-head" title="Logo">
              Robert W. Hazel
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/" activeStyle={{ fontWeight: fontWeight }}>
                Home
              </Link>
              <Link className="navbar-item" to="/resume" activeStyle={{ fontWeight: fontWeight }}>
                Resume
              </Link>
              <Link className="navbar-item" to="/scripts" activeStyle={{ fontWeight: fontWeight }}>
                Scripts
              </Link>
              <Link className="navbar-item" to="/blog" activeStyle={{ fontWeight: fontWeight }}>
                Blog
              </Link>
              <Link className="navbar-item" to="/interviews" activeStyle={{ fontWeight: fontWeight }}>
                Interviews
              </Link>
              <Link className="navbar-item" to="/contact" activeStyle={{ fontWeight: fontWeight }}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
