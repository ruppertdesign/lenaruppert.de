import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { HTMLContent } from '../Content'
import ContentWrapper from './ContentWrapper'

interface Props {
  title?: string | null
  content?: string | null
  contentIsMarkdown?: boolean // true for cms backend view
  bottomComponent?: React.ReactNode
}

export default ({
  title,
  content,
  contentIsMarkdown = false,
  bottomComponent,
}: Props) => {
  return (
    <ContentWrapper>
      <h1>{title}</h1>
      {content != null &&
        (contentIsMarkdown ? (
          <ReactMarkdown className="content" source={content} />
        ) : (
          <HTMLContent className="content" content={content} />
        ))}
      {bottomComponent}
    </ContentWrapper>
  )
}
