import * as React from 'react'
import { graphql } from 'gatsby'
import StandardPageTemplate from '../components/layout/StandardPageTemplate'
import MainPage from '../components/layout/MainPage'
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
    <MainPage title={post.frontmatter.title}>
      <StandardPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
    </MainPage>
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
