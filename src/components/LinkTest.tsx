import * as React from 'react'
import styled from '@emotion/styled'
import { rhythm, scale } from '../utils/typography'

const YellowLink = styled('a')`
  color: ${props => props.color};
`

const GrayLink = styled('a')`
  color: hsla(0, 0%, 0%, 0.8);
  position: relative;
  transition: all 0.3s ease-in-out 0s;
  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsla(0, 0%, 0%, 0.8);
    transition: all 0.3s ease-in-out 0s;
  }
  :hover:before {
    background-color: ${props => props.color};
  }
  :hover {
    color: ${props => props.color};
    box-shadow: none;
  }
`

const Button = styled('button')`
  margin: ${rhythm(0.5)} 0;
  border: 0 none;
  background-color: ${props => props.color};
  color: hsla(0, 0%, 100%, 1);
  cursor: pointer;
  transition: 0.5s ease;
  &:hover,
  &:active {
    background-color: hsla(0, 0%, 0%, 0.4);
    transition: 0.5s ease;
  }
  ,
  &:focus {
    outline: none;
  }
  padding: ${rhythm(0.2)} ${rhythm(0.4)};
`

export default () => {
  const yellow1 = 'hsla(47, 100%, 50%, 1)'
  const yellow2 = 'hsla(50, 100%, 59%, 1)'
  const yellow3 = 'hsla(46, 100%, 48%, 1)'
  return (
    <React.Fragment>
      <p>
        Lorem ipsum dolor <YellowLink color={yellow1}>sit amet</YellowLink> quot
        numpat.
      </p>
      <p>
        Lorem ipsum dolor <YellowLink color={yellow2}>sit amet</YellowLink> quot
        numpat.
      </p>
      <p>
        Lorem ipsum dolor <YellowLink color={yellow3}>sit amet</YellowLink> quot
        numpat.
      </p>

      <p>
        Lorem ipsum dolor <GrayLink color={yellow1}>sit amet</GrayLink> quot
        numpat.
      </p>
      <p>
        Lorem ipsum dolor <GrayLink color={yellow2}>sit amet</GrayLink> quot
        numpat.
      </p>
      <p>
        Lorem ipsum dolor <GrayLink color={yellow3}>sit amet</GrayLink> quot
        numpat.
      </p>
      <p>
        <Button color={yellow1}>weiter lesen</Button>
      </p>
      <p>
        <Button color={yellow2}>weiter lesen</Button>
      </p>
      <p>
        <Button color={yellow3}>weiter lesen</Button>
      </p>
    </React.Fragment>
  )
}
