import * as React from 'react'
import StandardPageTemplate from '../../components/layout/StandardPageTemplate'

export default ({ entry, widgetFor }) => (
  <StandardPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)
