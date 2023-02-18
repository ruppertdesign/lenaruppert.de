import * as React from 'react'
import Label from './Label'
import { rhythm } from '../../utils/typography'
import { css } from '@emotion/react'
import {
  inputStyles,
  errorInputStyles,
  errorMessageStyles,
} from './baseFormStyles'

const inputTextStyles = css`
  height: ${rhythm(1.6)};
`

interface Props {
  id: string
  value?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: string
  valid: boolean
  errorMsg: string
}

export default ({
  id,
  value,
  onChange,
  label,
  required,
  minLength,
  maxLength,
  pattern,
  valid,
  errorMsg,
}: Props) => (
  <React.Fragment>
    <Label htmlFor={id}>{label}</Label>
    <input
      id={id}
      name={id}
      placeholder={label}
      value={value}
      onChange={onChange}
      type="text"
      // eslint-disable-next-line react/no-unknown-property
      css={[inputStyles, inputTextStyles, !valid && errorInputStyles]}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
    />
    {
      // eslint-disable-next-line react/no-unknown-property
      !valid && <div css={errorMessageStyles}>{errorMsg}</div>
    }
  </React.Fragment>
)
