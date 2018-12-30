import * as React from 'react'
import { graphql } from 'gatsby'
import MainPage from '../components/layout/MainPage'
import { MarkdownRemarkConnection } from '../../typings/graphql-types'
import SamplesPageTemplate, {
  SamplesPageProps,
} from '../components/layout/SamplesPageTemplate'
import Seo from '../components/Seo'

interface Props {
  data: {
    allMarkdownRemark: MarkdownRemarkConnection
  }
}

const mapProps = ({ data }: Props): SamplesPageProps | null => {
  const { edges } = data.allMarkdownRemark
  if (edges == null) {
    return null
  }
  const mappedNodes = edges
    .map(edge => {
      const { frontmatter, html, id } =
        edge != null && edge.node != null
          ? edge.node
          : {
              frontmatter: { templateKey: 'undefined' },
              html: undefined,
              id: undefined as any,
            }
      return {
        id,
        ...frontmatter,
        html,
      }
    })
    .filter(node => node.id != null)
  const intro = mappedNodes.filter(
    node => (node as any).templateKey === 'samples'
  )[0]
  const samples = mappedNodes.filter(
    node => (node as any).templateKey === 'sample'
  )
  return {
    intro,
    samples,
  }
}

const SamplesPage = (props: Props) => {
  const mappedData = mapProps(props)
  if (mappedData == null) {
    return null
  }
  const { title, description } = mappedData.intro
  return (
    <MainPage>
      <Seo title={title} description={description} />
      <SamplesPageTemplate {...mappedData} />
    </MainPage>
  )
}

export default SamplesPage

export const samplesPageQuery = graphql`
  query SamplesPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { in: ["sample", "samples"] } } }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            templateKey
            title
            subTitle
            description
            order
            uri
          }
        }
      }
    }
  }
`
