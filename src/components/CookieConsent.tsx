import * as React from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import styleVars from '../styles/styleVars'
import { scale, rhythm } from '../utils/typography'
import css from '@emotion/css'
import { Global } from '@emotion/core'

const styles = css`
  .cookie-consent {
    display: flex;
    flexwrap: wrap;
    justify-content: space-between;
    alignitems: baseline;
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 999;
    padding: 0 ${rhythm(0.5)};
    background: ${styleVars.colors.white};
    color: ${styleVars.colors.bodyColor};
    border-top: 1px solid ${styleVars.colors.grayLighter};
    ${scale(-0.2)};
  }
  .cookie-consent-content {
    margin: ${rhythm(0.5)} 0;
  }
  .cookie-consent-button {
    padding: 0 ${rhythm(0.25)};
    margin: auto 0;
    border: 0 none;
    background-color: ${styleVars.colors.linkColor};
    color: ${styleVars.colors.white};
    cursor: pointer;
    transition: 0.5s ease;
    ${scale(-0.2)};
    &:hover,
    &:active {
      background-color: ${styleVars.colors.grayLight};
      transition: 0.5s ease;
    }
    ,
    &:focus {
      outline: none;
    }
  }
`

export default () => (
  <React.Fragment>
    <Global styles={styles} />
    <CookieConsent
      location="bottom"
      buttonText="Alles klar"
      cookieName="cookie-consent"
      disableStyles={true}
      containerClasses="cookie-consent"
      contentClasses="cookie-consent-content"
      buttonClasses="cookie-consent-button"
      expires={365}
      acceptOnScroll={true}
      acceptOnScrollPercentage={99}
    >
      Mit der Nutzung dieser Website stimmst du den Cookie-Richtlinien zu. Mehr
      Infos <Link to="/datenschutz">in meiner Datenschutzerklärung</Link>.
    </CookieConsent>
  </React.Fragment>
)
