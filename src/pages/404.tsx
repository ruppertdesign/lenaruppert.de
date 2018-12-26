import * as React from 'react'
import MainPage from '../components/layout/MainPage'
import ContentWrapper from '../components/layout/ContentWrapper'

export default () => (
  <MainPage title="Fehler 404">
    <ContentWrapper>
      <h1>Fehler 404</h1>
      <p>
        Die Seite wurde nicht gefunden. Versuchen sie es doch{' '}
        <a href="/">auf der Startseite</a>.
      </p>
    </ContentWrapper>
  </MainPage>
)
