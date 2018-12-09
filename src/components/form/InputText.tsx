import * as React from 'react'
import Label from './Label'
import { rhythm } from '../../utils/typography'
import css from '@emotion/css'
import { inputStyles } from './baseFormStyles'

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
  errorMsg?: string
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
      css={[inputStyles, inputTextStyles]}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
    />
    <div className="error">{errorMsg}</div>
  </React.Fragment>
)
