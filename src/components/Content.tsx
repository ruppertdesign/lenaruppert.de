import * as React from 'react'

interface Props {
  content?: string | null
  className: string
}

export default ({ content, className }: Props) => (
  <div className={className}>{content}</div>
)

export const HTMLContent = ({ content, className }: Props) => {
  if (content == null) {
    return null
  }
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}
