import * as React from 'react'
import { assertDeclareFunction } from 'babel-types'

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
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      rows={rows}
    />
    <div className="error">{errorMsg}</div>
  </React.Fragment>
)
