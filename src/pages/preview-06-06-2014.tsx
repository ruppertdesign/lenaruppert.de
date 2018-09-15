import * as React from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import * as headerImage from '../img/header.png'
import styled from 'react-emotion'

const HeaderImage = styled('img')`
  width: 100%;
`
export default class IndexPage extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper title="Willkommen">
        <HeaderImage src={headerImage} />
        <div style={{ margin: '3rem auto', maxWidth: 600 }}>
          <h1>Richard Hamming on Luck</h1>
          <div>
            <p>
              From Richard Hamming’s classic and must-read talk, “
              <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                You and Your Research
              </a>
              ”.
            </p>
            <blockquote>
              <p>
                There is indeed an element of luck, and no, there isn’t. The
                prepared mind sooner or later finds something important and does
                it. So yes, it is luck.{' '}
                <em>
                  The particular thing you do is luck, but that you do something
                  is not.
                </em>
              </p>
            </blockquote>
          </div>
          <p>Posted April 09, 2011</p>
        </div>
      </PageWrapper>
    )
  }
}
