import styled from '@emotion/styled'
import styleVars from '../../styles/styleVars'
import { rhythm } from '../../utils/typography'

export default styled('button')`
  margin: ${rhythm(0.5)} 0;
  padding: ${rhythm(0.2)} ${rhythm(0.4)};
  border: 0 none;
  background-color: ${styleVars.colors.linkColor};
  color: ${styleVars.colors.white};
  cursor: pointer;
  transition: 0.5s ease;
  &:hover,
  &:active {
    background-color: ${styleVars.colors.grayLight};
    transition: 0.5s ease;
  }
  ,
  &:focus {
    outline: none;
  }
`
