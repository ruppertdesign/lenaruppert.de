import * as React from 'react'
import Label from './Label'
import { rhythm } from '../../utils/typography'
import css from '@emotion/css'
import { inputStyles } from './baseFormStyles'

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
  errorMsg?: string
}

export default ({
  id,
  value,
  onChange,
  label,
  required,
  minLength,
  rows,
  errorMsg,
}: Props) => (
  <React.Fragment>
    <Label htmlFor={id}>{label}</Label>
    <textarea
      id={id}
      name={id}
      placeholder={label}
      onChange={onChange}
      css={[inputStyles, inputTextareaStyles]}
      required={required}
      minLength={minLength}
      rows={rows}
    />
    <div className="error">{errorMsg}</div>
  </React.Fragment>
)
