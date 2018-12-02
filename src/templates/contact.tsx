import * as React from 'react'
import { graphql } from 'gatsby'
import StandardPageTemplate from '../components/layout/StandardPageTemplate'
import PageWrapper from '../components/layout/PageWrapper'
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
    <PageWrapper title={post.frontmatter.title}>
      <StandardPageTemplate
        title={post.frontmatter.title}
        content={post.html}
        bottomComponent={<ContactForm />}
      />
    </PageWrapper>
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
