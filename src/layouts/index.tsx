import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import Header from './Header'
import { RootQueryType } from '../graphql-types'

interface Props {
  children: () => any
  data: RootQueryType
}

const Wrapper = styled('section')`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
`

export default class MainLayout extends React.PureComponent<Props, {}> {
  public render() {
    const {
      children,
      data: { site },
    } = this.props
    return (
      <section>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
          <title>{site.siteMetadata.title}</title>
        </Helmet>
        <Wrapper>
          <Header />
          <main>{children()}</main>
        </Wrapper>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query MainLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
