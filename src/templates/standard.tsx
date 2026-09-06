import * as React from 'react'
import { graphql, HeadProps } from 'gatsby'
import StandardPageTemplate from '../components/layout/StandardPageTemplate'
import MainPage from '../components/layout/MainPage'
import { MarkdownRemark } from '../../typings/graphql-types'
import Seo from '../components/Seo'

interface Props {
  data: {
    markdownRemark: MarkdownRemark
  }
}

const StandardPage = ({ data }: Props) => {
  const { markdownRemark: post } = data
  if (post == null || post.frontmatter == null) {
    return null
  }
  const { frontmatter, html } = post
  return (
    <MainPage>
      <StandardPageTemplate title={frontmatter.title} content={html} />
    </MainPage>
  )
}

export default StandardPage

export const Head = ({ data }: HeadProps<Props['data']>) => {
  const frontmatter = data.markdownRemark?.frontmatter
  return (
    <Seo title={frontmatter?.title} description={frontmatter?.description} />
  )
}

export const standardPageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
