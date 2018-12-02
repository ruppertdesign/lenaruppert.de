import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import styleVars from '../../styles/styleVars'
import { scale } from '../../utils/typography'

const Content = styled('p')`
  text-align: center;
  ${scale(-0.5)};
  color: ${styleVars.colors.grayLight};
`

const FooterLink = ({ title, to }) => <Link to={to}>{title}</Link>

export default () => (
  <footer>
    <Content>
      &copy; {new Date().getFullYear()} Lena Ruppert |{' '}
      <FooterLink title="Impressum" to="/impressum" /> |{' '}
      <FooterLink title="Datenschutz" to="/datenschutz" /> |{' '}
      <FooterLink title="AGB" to="/agb" />
    </Content>
  </footer>
)
