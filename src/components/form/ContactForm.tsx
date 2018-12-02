import * as React from 'react'
import InputText from './InputText'
import InputTextArea from './InputTextArea'

interface Input {
  value?: string
  error?: string
}

interface State {
  submitError: boolean
  name: Input
  email: Input
  tel: Input
  message: Input
}

const patterns = {
  text: '[0-9a-zA-ZßÖÄÜ\u00E0-\u00FC,. _-]{3,}',
  email: '[0-9a-zA-Z._%+-]+@[0-9a-zA-Z.-]+.[a-z]{2,4}',
  tel: '[()0-9 /+-]*',
}

export default class ContactForm extends React.PureComponent<{}, State> {
  state: State = {
    submitError: false,
    name: {},
    email: {},
    tel: {},
    message: {},
  }

  handleUserInput = ({ target }) => {
    console.info(target.name, target.value)
  }

  render() {
    return (
      <form
        id="contactForm"
        name="contact"
        action="danke"
        data-netlify="true"
        netlify-honeypot="fax"
      >
        <fieldset>
          <legend>Kontakt</legend>

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
            label="Name"
            value={this.state.name.value}
            errorMsg={this.state.name.error}
            onChange={this.handleUserInput}
            required={true}
            minLength={3}
            maxLength={50}
            pattern={patterns.text}
          />

          <InputText
            id="email"
            label="E-Mail"
            value={this.state.email.value}
            errorMsg={this.state.email.error}
            onChange={this.handleUserInput}
            required={true}
            maxLength={50}
            pattern={patterns.email}
          />

          <InputText
            id="tel"
            label="Telefon"
            value={this.state.tel.value}
            errorMsg={this.state.tel.error}
            onChange={this.handleUserInput}
            maxLength={50}
            pattern={patterns.tel}
          />

          <InputTextArea
            id="message"
            label="Ihre Nachricht"
            value={this.state.message.value}
            errorMsg={this.state.message.error}
            onChange={this.handleUserInput}
            rows={6}
          />

          <input
            type="checkbox"
            name="fax"
            value="1"
            tabIndex={-1}
            autoComplete="off"
            className="hideme"
          />

          <button id="submit" type="submit">
            Senden
          </button>
        </fieldset>
      </form>
    )
  }
}
