import * as React from 'react'
import { PreviewProps } from './PreviewProps'
import Sample from '../../components/layout/Sample'

export default ({ entry }: PreviewProps) => {
  const { body, ...data } = entry.getIn(['data']).toJS()
  return <Sample {...data} html={body} contentIsMarkdown={true} />
}
