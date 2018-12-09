import * as React from 'react'
import InputText from './InputText'
import InputTextArea from './InputTextArea'
import Fieldset from './Fieldset'
import Legend from './Legend'
import HoneyPot from './HoneyPot'
import styled from '@emotion/styled'
import Button from './Button'
import validator from './validator'

interface Input {
  value: string
  valid: boolean
}

interface State {
  submitError: boolean
  name: Input
  email: Input
  tel: Input
  message: Input
}

const Form = styled('form')`
  max-width: 22rem;
`

const fieldNames = ['name', 'email', 'tel', 'message']
const initialFormValues = fieldNames.reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: {
      value: '',
      valid: true,
    },
  }),
  {}
)

export default class ContactForm extends React.PureComponent<{}, State> {
  // @ts-ignore
  state: State = {
    submitError: false,
    ...initialFormValues,
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const target = event.target as HTMLFormElement
    const fields = {}
    // @ts-ignore: no idea how to fix that
    for (const field of target.elements) {
      if (!fieldNames.includes(field.name)) {
        continue
      }
      fields[field.name] = {
        value: this.state[field.name].value,
        valid: validator.validate(field),
      }
    }
    const formValid = Object.values(fields).every(field => (field as any).valid)
    if (formValid) {
      // TODO submit form
    } else {
      this.setState(fields)
    }
  }

  handleUserInput = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement
    const valid = validator.validate(target)
    // @ts-ignore: we trust that the names match here
    this.setState({
      [target.name]: {
        value: target.value,
        valid,
      },
    })
  }

  render() {
    return (
      <Form
        id="contactForm"
        name="contact"
        action="danke"
        data-netlify="true"
        netlify-honeypot="fax"
        onSubmit={this.handleSubmit}
        noValidate={true}
      >
        <Fieldset>
          <Legend>Kontakt</Legend>

          {this.state.submitError && (
            <div className="error" id="submitError">
              Leider konnten Ihre Daten nicht übertragen werden.
              <br />
              Bitte überprüfen Sie Ihre Daten oder versuchen es später noch
              einmal.
            </div>
          )}

          <InputText
            id="name"
            label="Name *"
            value={this.state.name.value}
            valid={this.state.name.valid}
            onChange={this.handleUserInput}
            required={true}
            minLength={3}
            maxLength={50}
            pattern={validator.patterns.text}
            errorMsg="Bitte geben Sie Ihren Namen ein"
          />

          <InputText
            id="email"
            label="E-Mail *"
            value={this.state.email.value}
            valid={this.state.email.valid}
            onChange={this.handleUserInput}
            required={true}
            maxLength={50}
            pattern={validator.patterns.email}
            errorMsg="Bitte geben Sie eine gültige E-Mail Adresse ein"
          />

          <InputText
            id="tel"
            label="Telefon"
            value={this.state.tel.value}
            valid={this.state.tel.valid}
            onChange={this.handleUserInput}
            maxLength={50}
            pattern={validator.patterns.tel}
            errorMsg="Bitte geben Sie nur gültige Zeichen ein: 0-9 / + - ( )"
          />

          <InputTextArea
            id="message"
            label="Ihre Nachricht *"
            value={this.state.message.value}
            valid={this.state.message.valid}
            onChange={this.handleUserInput}
            required={true}
            rows={6}
            errorMsg="Bitte geben Sie Ihre Nachricht ein"
          />

          <HoneyPot name="fax" />

          <Button id="submit" type="submit">
            Senden
          </Button>
        </Fieldset>
      </Form>
    )
  }
}
