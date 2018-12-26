import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import StandardPageTemplate from '../components/layout/StandardPageTemplate'
import MainPage from '../components/layout/MainPage'
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
    <MainPage title={post.frontmatter.title}>
      <HeaderImage src={headerImage} />
      <StandardPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
    </MainPage>
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
