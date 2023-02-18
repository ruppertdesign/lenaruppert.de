import * as React from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
  content?: string | null
  className: string
  contentIsMarkdown?: boolean // true for cms backend view
}

export default ({ content, className, contentIsMarkdown }: Props) => {
  if (content == null) {
    return null
  }
  if (contentIsMarkdown) {
    // eslint-disable-next-line react/no-children-prop
    return <ReactMarkdown className={className} children={content} />
  }
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}
