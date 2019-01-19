import * as React from 'react'
import Content from '../Content'
import { A } from '../form/Buttons'
import styled from '@emotion/styled'
import styleVars from '../../styles/styleVars'
import { rhythm, scale } from '../../utils/typography'
import { link } from 'fs'

export interface SampleProps {
  id: string
  title?: string | null
  subTitle?: string | null
  html?: string | null
  uri?: string | null
  order?: number | null
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

const LinkedHeading = styled('a')`
  box-shadow: none;
  :hover,
  :active {
    box-shadow: none;
  }
`

export default ({
  id,
  title,
  subTitle,
  html,
  uri,
  contentIsMarkdown,
}: SampleProps) => {
  const linkProps = {
    href: uri as string,
    target: '_blank',
    rel: 'nofollow noopener noreferrer',
  }
  return (
    <Article key={id}>
      <h2>
        <LinkedHeading {...linkProps}>{title}</LinkedHeading>
      </h2>
      <Subtitle>{subTitle}</Subtitle>
      <Content
        className="sample"
        content={html}
        contentIsMarkdown={contentIsMarkdown}
      />
      <A {...linkProps}>Weiter lesen</A>
    </Article>
  )
}
