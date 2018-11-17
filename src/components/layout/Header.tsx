import * as React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'
import styleVars from '../../styles/styleVars'
import * as logo from '../../img/logo.png'
import { rhythm, scale } from '../../utils/typography'

const Header = styled('header')`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HomeLink = styled(Link)`
  &:hover,
  &:active {
    box-shadow: none;
  }
`

const Logo = styled('img')`
  width: 15rem;
  margin: ${rhythm(1)} 0 ${rhythm(2)} 0;
`

const TmpText = styled('p')`
  position: relative;
  top: ${rhythm(-3)};
  text-align: center;
  color: #333;
  ${scale(-0.5)};
`

const Nav = styled('nav')`
  margin-bottom: ${rhythm(0.5)};
`

const NavList = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;
`

const underlined = css`
  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${styleVars.colors.linkColor};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
`

const linkClass = css`
  color: ${styleVars.colors.bodyColor};
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease-in-out 0s;
  ${underlined}
  :hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
  :hover {
    color: ${styleVars.colors.linkColor};
    box-shadow: none;
  }
`

const activeLinkClass = css`
  color: ${styleVars.colors.linkColor};
  ${underlined}
  :before {
    visibility: visible;
    transform: scaleX(1);
  }
`

const Li = styled('li')`
  display: inline-block;
  margin: 0 ${rhythm(1.5)};
`

const NavLink = ({ title, to }) => (
  <Li>
    <Link to={to} className={linkClass} activeClassName={activeLinkClass}>
      {title}
    </Link>
  </Li>
)

export default () => (
  <Header>
    <HomeLink to="/preview-06-06-2014">
      <Logo src={logo} />
      <TmpText>(Logo ist nur ein Platzhalter)</TmpText>
    </HomeLink>
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
