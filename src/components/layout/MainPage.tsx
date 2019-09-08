import * as React from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import CookieConsent from '../CookieConsent'
import { Global } from '@emotion/core'
import styleVars from '../../styles/styleVars'
import globalStyles from '../../styles/globalStyles'

interface Props {
  children: React.ReactNode
}

const PageWrapper = styled('section')`
  max-width: ${styleVars.dimensions.pageWidth};
  padding: 0 1rem;
  margin: 0 auto;
`
export default ({ children }: Props) => (
  <React.Fragment>
    <Global styles={globalStyles} />
    <PageWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </PageWrapper>
    <CookieConsent />
  </React.Fragment>
)
