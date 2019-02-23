import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import StandardPageTemplate from '../components/layout/StandardPageTemplate'
import MainPage from '../components/layout/MainPage'
import { MarkdownRemark } from '../../typings/graphql-types'
import * as headerImage from '../img/header.png'
import Seo from '../components/Seo'
import { scale } from '../utils/typography'
import styleVars from '../styles/styleVars'

interface Props {
  data: {
    markdownRemark: MarkdownRemark
  }
}

const HeaderImage = styled('img')`
  width: 100%;
  margin: 0;
`

const Credits = styled('small')`
  position: relative;
  top: -0.25rem;
  display: flex;
  justify-content: flex-end;
  ${scale(-0.75)};
  line-height: 1;
  color: ${styleVars.colors.grayLight};
`

const StartPage = ({ data }: Props) => {
  const { markdownRemark: post } = data
  if (post == null || post.frontmatter == null) {
    return null
  }
  const { frontmatter, html } = post
  return (
    <MainPage>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <HeaderImage src={headerImage} alt="Willkommen auf lenaruppert.de" />
      <Credits>
        image: <a href="https://pixabay.com">pixabay</a>
      </Credits>
      <StandardPageTemplate title={frontmatter.title} content={html} />
    </MainPage>
  )
}

export default StartPage

export const standardPageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
