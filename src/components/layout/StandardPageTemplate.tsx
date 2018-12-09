import * as React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../../utils/typography'
import { HTMLContent } from '../Content'
import styleVars from '../../styles/styleVars'

interface Props {
  title?: string | null
  content?: string | null
  bottomComponent?: React.ReactNode
}

const Wrapper = styled('section')`
  margin: ${rhythm(2)} auto;
  max-width: ${styleVars.dimensions.contentWidth};
`

export default ({ title, content, bottomComponent }: Props) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <HTMLContent className="content" content={content} />
      {bottomComponent}
    </Wrapper>
  )
}
