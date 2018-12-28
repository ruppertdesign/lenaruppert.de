import * as React from 'react'
import Content from '../Content'
import ContentWrapper from './ContentWrapper'
import { A } from '../form/Buttons'
import styled from '@emotion/styled'
import styleVars from '../../styles/styleVars'
import { rhythm, scale } from '../../utils/typography'

export interface SamplesPageProps {
  intro: {
    id: string
    title?: string | null
    html?: string | null
  }
  samples: Array<{
    id: string
    title?: string | null
    subTitle?: string | null
    html?: string | null
    uri?: string | null
    order?: number | null
  }>
  contentIsMarkdown?: boolean
}

const Article = styled('article')`
  border-top: 1px solid ${styleVars.colors.grayLighter};
  padding-bottom: ${rhythm(1)};
`

const Subtitle = styled('span')`
  color: ${styleVars.colors.grayLight};
  ${scale(-0.2)};
`

export default ({ intro, samples, contentIsMarkdown }: SamplesPageProps) => {
  return (
    <ContentWrapper>
      <h1>{intro.title}</h1>
      <Content
        className="content"
        content={intro.html}
        contentIsMarkdown={contentIsMarkdown}
      />
      {samples.map(sample => (
        <Article key={sample.id}>
          <h2>{sample.title}</h2>
          <Subtitle>{sample.subTitle}</Subtitle>
          <Content
            className="sample"
            content={sample.html}
            contentIsMarkdown={contentIsMarkdown}
          />
          {sample.uri != null && (
            <A
              href={sample.uri}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Weiter lesen
            </A>
          )}
        </Article>
      ))}
    </ContentWrapper>
  )
}
