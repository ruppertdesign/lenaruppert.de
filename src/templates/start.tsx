import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'react-emotion'
import StandardPageTemplate from '../components/layout/StandardPageTemplate'
import PageWrapper from '../components/layout/PageWrapper'
import { MarkdownRemark } from '../../typings/graphql-types'
import * as headerImage from '../img/header.png'

interface Props {
  data: {
    markdownRemark: MarkdownRemark
  }
}

const HeaderImage = styled('img')`
  width: 100%;
  margin: 0;
`

const StartPage = ({ data }: Props) => {
  const { markdownRemark: post } = data
  if (post == null || post.frontmatter == null) {
    return null
  }
  return (
    <PageWrapper title={post.frontmatter.title}>
      <HeaderImage src={headerImage} />
      <StandardPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
    </PageWrapper>
  )
}

export default StartPage

export const standardPageQuery = graphql`
  query StartPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
