import * as React from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import { Global, css } from '@emotion/core'
import styleVars from '../../styles/styleVars'
import globalStyles from '../../styles/globalStyles'

interface Props {
  children: React.ReactNode
  title?: string | null
}

const Wrapper = styled('section')`
  max-width: ${styleVars.dimensions.pageWidth};
  padding: 0 1rem;
  margin: 0 auto;
`
export default ({ children, title }: Props) => (
  <section>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <title>
        {title == null ? 'Lena Ruppert' : `${title} | Lena Ruppert`}
      </title>
    </Helmet>
    <Global styles={globalStyles} />
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  </section>
)
