import * as React from 'react'
import StandardPageTemplate from '../../components/layout/StandardPageTemplate'
import { PreviewProps } from './PreviewProps'

export default ({ entry }: PreviewProps) => {
  const { title, body } = entry.getIn(['data']).toJS()
  return (
    <StandardPageTemplate
      title={title}
      content={body}
      contentIsMarkdown={true}
    />
  )
}
