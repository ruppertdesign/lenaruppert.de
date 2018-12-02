import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
  title?: string | null
}

const Wrapper = styled('section')`
  max-width: 60rem;
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
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  </section>
)
