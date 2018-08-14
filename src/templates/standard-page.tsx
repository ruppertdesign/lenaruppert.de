import * as React from 'react'
import { graphql } from 'gatsby'
import StandardPageTemplate from '../components/layout/StandardPageTemplate'
import PageWrapper from '../components/layout/PageWrapper'
import { MarkdownRemark } from '../../typings/graphql-types'

interface Props {
  data: MarkdownRemark
}

const StandardPage = ({ data }) => {
  const { markdownRemark: post } = data
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
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
