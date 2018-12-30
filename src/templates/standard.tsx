import * as React from 'react'
import { graphql } from 'gatsby'
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
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <StandardPageTemplate title={frontmatter.title} content={html} />
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
        description
      }
    }
  }
`
