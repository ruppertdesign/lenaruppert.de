import * as React from 'react'
import styled from 'react-emotion'
import { rhythm } from '../../utils/typography'
import { HTMLContent } from '../Content'

interface Props {
  title?: string | null
  content?: string | null
}

const Wrapper = styled('section')`
  margin: ${rhythm(2)} auto;
  max-width: 40rem;
`

export default ({ title, content }: Props) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <HTMLContent className="content" content={content} />
    </Wrapper>
  )
}
