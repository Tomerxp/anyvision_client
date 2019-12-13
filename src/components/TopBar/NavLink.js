import React from 'react'
import { Link } from '@reach/router'

import './NavLink.scss'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: `nav-link${isCurrent ? ' active' : ''}`,
      }
    }}
  />
)

export default NavLink
