import * as React from 'react'
import Content from '../Content'
import ContentWrapper from './ContentWrapper'
import Sample from './Sample'

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
        <Sample
          key={sample.id}
          {...sample}
          contentIsMarkdown={contentIsMarkdown}
        />
      ))}
    </ContentWrapper>
  )
}
