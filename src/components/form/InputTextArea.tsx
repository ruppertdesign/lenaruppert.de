import * as React from 'react'
import Label from './Label'
import { rhythm } from '../../utils/typography'
import { css } from '@emotion/react'
import {
  inputStyles,
  errorInputStyles,
  errorMessageStyles,
} from './baseFormStyles'

const inputTextareaStyles = css`
  height: ${rhythm(5)};
`

interface Props {
  id: string
  value?: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  label: string
  required?: boolean
  minLength?: number
  maxLength?: number
  rows: number
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
  rows,
  valid,
  errorMsg,
}: Props) => (
  <React.Fragment>
    <Label htmlFor={id}>{label}</Label>
    <textarea
      id={id}
      name={id}
      value={value}
      placeholder={label}
      onChange={onChange}
      // eslint-disable-next-line react/no-unknown-property
      css={[inputStyles, inputTextareaStyles, !valid && errorInputStyles]}
      required={required}
      minLength={minLength}
      rows={rows}
    />
    {
      // eslint-disable-next-line react/no-unknown-property
      !valid && <div css={errorMessageStyles}>{errorMsg}</div>
    }
  </React.Fragment>
)
