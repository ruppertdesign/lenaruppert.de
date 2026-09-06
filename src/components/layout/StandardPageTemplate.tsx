import * as React from 'react'
import Content from '../Content'
import ContentWrapper from './ContentWrapper'

interface Props {
  title?: string | null
  content?: string | null
  bottomComponent?: React.ReactNode
}

export default ({ title, content, bottomComponent }: Props) => {
  return (
    <ContentWrapper>
      <h1>{title}</h1>
      <Content className="content" content={content} />
      {bottomComponent}
    </ContentWrapper>
  )
}
