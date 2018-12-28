import * as React from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styleVars from '../../styles/styleVars'
import * as logo from '../../img/logo.png'
import { rhythm, scale } from '../../utils/typography'

const Header = styled('header')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${styleVars.dimensions.contentWidth};
`

const HomeLink = styled(Link)`
  &:hover,
  &:active {
    box-shadow: none;
  }
`

const Logo = styled('img')`
  width: 15rem;
  margin: ${rhythm(1)} 0;
`

const Nav = styled('nav')`
  width: 100%;
`

const NavList = styled('ul')`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

const Li = styled('li')`
  display: block;
  flex: 0 1 auto;
  list-style-type: none;
  font-family: ${styleVars.fonts.header};
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

const StyledLink = styled(Link)`
  color: ${styleVars.colors.bodyColor};
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

const activeLinkStyle = css`
  color: ${styleVars.colors.linkColor};
  ${underlined}
  :before {
    visibility: visible;
    transform: scaleX(1);
  }
`

const NavLink = ({ title, to }) => (
  <Li>
    <StyledLink to={to} activeStyle={activeLinkStyle}>
      {title}
    </StyledLink>
  </Li>
)

export default () => (
  <Header>
    <HomeLink to="/preview-06-06-2014">
      <Logo src={logo} />
    </HomeLink>
    <Nav>
      <NavList>
        <NavLink title="Textproben" to="/textproben" />
        <NavLink title="Referenzen" to="/referenzen" />
        <NavLink title="Über mich" to="/ueber-mich" />
        <NavLink title="Kontakt" to="/kontakt" />
      </NavList>
    </Nav>
  </Header>
)
