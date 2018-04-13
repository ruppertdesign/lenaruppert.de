import * as React from 'react'
import Helmet from 'react-helmet'

export default ({ children }: { children: () => any }) => (
  <div>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <title>Home | lenaruppert.de</title>
    </Helmet>
    <div>{children()}</div>
  </div>
)
