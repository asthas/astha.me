import React from "react"
import { Github } from "./icons/github";
import { Medium } from "./icons/medium";
import { Twitter } from "./icons/twitter";
import { Email } from "./icons/email";

import "./navlink.css";

const linksComponents = {
  github: {
    component: Github,
    link: 'https://github.com/asthas'
  },
  medium: {
    component: Medium,
    link: 'https://medium.com/@astha.sharma'
  },
  twitter: {
    component: Twitter,
    link: 'https://twitter.com/asthas_'
  },
  email: {
    component: Email,
    link: 'mailto:a@astha.me'
  }
}

const NavLink = ({
  type
}) => {
  const { component: Component, link } = linksComponents[type]
  return (
    <a
      className="nav-link"
      target="_blank"
      rel="noreferer"
      href={link}
      title={type}
      style={{
        color: `#01FD34`,
        textDecoration: `none`,
      }}
    >
      <Component />
    </a>
  )
}

export default NavLink