import * as React from 'react'
import { graphql } from 'gatsby'
import StandardPageTemplate from '../components/layout/StandardPageTemplate'
import PageWrapper from '../components/layout/PageWrapper'
import { MarkdownRemark } from '../../typings/graphql-types'

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
  return (
    <PageWrapper title={post.frontmatter.title}>
      <StandardPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
    </PageWrapper>
  )
}

export default StandardPage

export const standardPageQuery = graphql`
  query StandardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
