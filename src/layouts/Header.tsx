import * as React from 'react'
import styled from 'react-emotion'

const Nav = styled('nav')`
  background-color: #333;
  padding: 5px 0;
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
  color: #fff;
`

const NavLink = ({ title }) => <Li>{title}</Li>

export default () => (
  <header>
    <Nav>
      <NavList>
        <NavLink title="Textproben" />
        <NavLink title="Referenzen" />
        <NavLink title="Über mich" />
        <NavLink title="Kontakt" />
        <NavLink title="Impressum" />
      </NavList>
    </Nav>
  </header>
)
