import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import styleVars from '../../styles/styleVars'
import * as logo from '../../img/logo.png'
import * as headerImage from '../../img/header.png'

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

const HeaderImage = styled('img')`
  width: 100%;
`

const NavLink = ({ title, to }) => (
  <Li>
    <Link to={to}>{title}</Link>
  </Li>
)

export default () => (
  <Header>
    <Logo src={logo} />
    <Nav>
      <NavList>
        <NavLink title="Textproben" to="" />
        <NavLink title="Referenzen" to="" />
        <NavLink title="Über mich" to="" />
        <NavLink title="Kontakt" to="" />
        <NavLink title="Impressum" to="" />
      </NavList>
    </Nav>
    <HeaderImage src={headerImage} />
  </Header>
)
