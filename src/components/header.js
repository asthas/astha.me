import PropTypes from "prop-types"
import React from "react"
import NavLink from './navlink';

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ margin: 0, display: 'flex', justifyContent: 'space-around' }}>
        <NavLink type='github' />
        <NavLink type='medium' />
        <NavLink type='twitter' />
        <NavLink type='email' />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
