import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import styleVars from '../../styles/styleVars'
import * as logo from '../../img/logo.png'

const Header = styled('header')`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled('img')`
  width: 15rem;
  margin: 2rem 0 4rem 0;
`

const Nav = styled('nav')`
  margin-bottom: 0.5rem;
`

const NavList = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;
`

const Li = styled('li')`
  display: inline-block;
  margin: 0 25px;
  a {
    color: ${styleVars.colors.textColor};
    text-transform: uppercase;
    &:hover {
      color: ${styleVars.colors.linkColor};
    }
  }
`

const NavLink = ({ title, to }) => (
  <Li>
    <Link to={to}>{title}</Link>
  </Li>
)

export default () => (
  <Header>
    <Link to="/preview-06-06-2014">
      <Logo src={logo} />
    </Link>
    <Nav>
      <NavList>
        <NavLink title="Textproben" to="/textproben" />
        <NavLink title="Referenzen" to="/referenzen" />
        <NavLink title="Über mich" to="/ueber-mich" />
        <NavLink title="Kontakt" to="/kontakt" />
        <NavLink title="Impressum" to="/impressum" />
      </NavList>
    </Nav>
  </Header>
)
