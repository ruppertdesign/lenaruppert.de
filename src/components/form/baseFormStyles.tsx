import { css } from '@emotion/core'
import { rhythm, scale } from '../../utils/typography'
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

export const errorInputStyles = css`
  border-bottom: 1px solid ${styleVars.colors.red};
`

export const errorMessageStyles = css`
  color: ${styleVars.colors.red};
  ${scale(-0.6)};
  position: relative;
  top: ${rhythm(-0.25)};
`
