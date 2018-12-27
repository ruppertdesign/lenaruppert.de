import * as React from 'react'
import StandardPageTemplate from '../../components/layout/StandardPageTemplate'

interface Props {
  entry: {
    getIn: (path: string[]) => any
  }
  widgetFor: (name: string) => any
}

export default ({ entry }: Props) => {
  const { title, body } = entry.getIn(['data']).toJS()
  return (
    <StandardPageTemplate
      title={title}
      content={body}
      contentIsMarkdown={true}
    />
  )
}
