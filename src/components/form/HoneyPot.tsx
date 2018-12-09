import * as React from 'react'
import styled from '@emotion/styled'

const HoneyPot = styled('input')`
  display: none;
`

interface Props {
  name: string
}

export default ({ name }: Props) => (
  <HoneyPot
    name={name}
    type="checkbox"
    value="1"
    tabIndex={-1}
    autoComplete="off"
  />
)
