import * as React from 'react'
import { HTMLContent } from '../Content'
import ContentWrapper from './ContentWrapper'

interface Props {
  title?: string | null
  content?: string | null
  bottomComponent?: React.ReactNode
}

export default ({ title, content, bottomComponent }: Props) => {
  console.info(typeof content)
  return (
    <ContentWrapper>
      <h1>{title}</h1>
      <HTMLContent className="content" content={content} />
      {bottomComponent}
    </ContentWrapper>
  )
}
