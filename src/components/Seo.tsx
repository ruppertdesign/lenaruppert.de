import * as React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Query } from '../../typings/graphql-types'

interface Props {
  title?: string | null
  description?: string | null
}

export default class Seo extends React.PureComponent<Props, unknown> {
  renderMeta = (data: Query) => {
    const { title, description } = this.props
    const siteMetadata = data.site!.siteMetadata
    const mainTitle = siteMetadata!.title as string
    const metaDescription = description || (siteMetadata!.description as string)
    return (
      <Helmet
        htmlAttributes={{
          lang: 'de',
        }}
        defaultTitle={mainTitle}
        title={title || mainTitle}
        titleTemplate={`%s | ${siteMetadata!.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title || mainTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
        ]}
      />
    )
  }

  render() {
    return <StaticQuery query={SeoQuery} render={this.renderMeta} />
  }
}

const SeoQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
