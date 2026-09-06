import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Query } from '../../typings/graphql-types'

interface Props {
  title?: string | null
  description?: string | null
}

const Seo = ({ title, description }: Props) => {
  const data = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const siteMetadata = data.site!.siteMetadata
  const mainTitle = siteMetadata!.title as string
  const pageTitle = title ? `${title} | ${mainTitle}` : mainTitle
  const metaDescription = description || (siteMetadata!.description as string)
  return (
    <>
      <title>{pageTitle}</title>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/favicon-48x48.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title || mainTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </>
  )
}

export default Seo
