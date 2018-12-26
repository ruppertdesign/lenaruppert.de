import * as React from 'react'
import { graphql } from 'gatsby'
import StandardPageTemplate from '../components/layout/StandardPageTemplate'
import MainPage from '../components/layout/MainPage'
import { MarkdownRemark } from '../../typings/graphql-types'
import ContactForm from '../components/form/ContactForm'

interface Props {
  data: {
    markdownRemark: MarkdownRemark
  }
}

const ContactPage = ({ data }: Props) => {
  const { markdownRemark: post } = data
  if (post == null || post.frontmatter == null) {
    return null
  }
  return (
    <MainPage title={post.frontmatter.title}>
      <StandardPageTemplate
        title={post.frontmatter.title}
        content={post.html}
        bottomComponent={<ContactForm />}
      />
    </MainPage>
  )
}

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
