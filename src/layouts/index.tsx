import * as React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import { RootQueryType } from '../graphql-types'

interface Props {
  children: () => any
  data: RootQueryType
}

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
        <Header />
        <main>{children()}</main>
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
