import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './landing.sass'

export default ({ children }: any) => (
  <div>
    <Helmet>
      <meta name="robots" content="noindex,nofollow" />
      <title>lenaruppert.de</title>
    </Helmet>
    <div>{children()}</div>
  </div>
)
