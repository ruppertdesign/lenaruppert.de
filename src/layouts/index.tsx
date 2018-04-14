import * as React from 'react'
import Helmet from 'react-helmet'
import { RootQueryType } from '../graphql-types'

interface Props {
  children: () => any
  data: RootQueryType
}

export default class MainLayout extends React.PureComponent<Props, {}> {
  public render() {
    console.info(this.props)
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
