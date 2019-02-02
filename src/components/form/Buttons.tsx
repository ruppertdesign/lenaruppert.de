import styled from '@emotion/styled'
import styleVars from '../../styles/styleVars'
import { rhythm, scale } from '../../utils/typography'

const styles = `
  margin: ${rhythm(0.5)} 0;
  border: 0 none;
  outline: none;
  box-shadow: none;
  background-color: ${styleVars.colors.accentColor};
  color: ${styleVars.colors.black};
  cursor: pointer;
  transition: 0.5s ease;
  &:hover,
  &:active {
    background-color: ${styleVars.colors.grayLight};
    color: ${styleVars.colors.white};
    transition: 0.5s ease;
    outline: none;
    box-shadow: none;
  }
  ,
  &:focus {
    outline: none;
  }
`

const Button = styled('button')`
  ${styles}
  padding: ${rhythm(0.2)} ${rhythm(0.4)};
`
const A = styled('a')`
  ${styles}
  padding: ${rhythm(0.075)} ${rhythm(0.25)};
  ${scale(-0.2)};
`

export { Button, A }
