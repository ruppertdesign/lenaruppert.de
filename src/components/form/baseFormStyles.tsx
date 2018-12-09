import { css } from '@emotion/core'
import { rhythm } from '../../utils/typography'
import styleVars from '../../styles/styleVars'

export const inputStyles = css`
  box-sizing: border-box;
  outline: none;
  display: block;
  width: 100%;
  padding: ${rhythm(0.2)};
  margin-bottom: ${rhythm(0.3)};
  border: none;
  border-bottom: 1px solid ${styleVars.colors.grayLight};
  background: transparent;
`
