import * as React from 'react'
import styled from 'react-emotion'
import Helmet from 'react-helmet'

const Container = styled('div')`
  text-align: center;
  margin-top: 10rem;
`

const Title = styled('h1')`
  font-size: 2rem;
`

export default () => (
  <div>
    <Helmet>
      <meta name="robots" content="noindex,nofollow" />
      <title>lenaruppert.de</title>
    </Helmet>
    <Container>
      <h1>lenaruppert.de</h1>
    </Container>
  </div>
)
