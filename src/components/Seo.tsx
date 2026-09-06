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
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '48x48',
            href: '/favicon-48x48.png',
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
          { rel: 'manifest', href: '/site.webmanifest' },
        ]}
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
