import * as React from 'react'
import { assertDeclareFunction } from 'babel-types'

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
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      type="text"
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
    />
    <div className="error">{errorMsg}</div>
  </React.Fragment>
)
