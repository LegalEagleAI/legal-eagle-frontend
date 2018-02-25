import React, { Component } from 'react'
import { AppHeader } from '../../components/AppHeader'
import { CardBox } from '../../components/CardBox'

const LoremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum ipsum sit'

class App extends Component {
  render() {
    return (
      <div className="homepage">
        <AppHeader homepage />
        <section className="help-me glh-section">
          <div className="container">
            <h2>What can I help you with today?</h2>
            <div className="columns is-multiline">
              <div className="column is-half-tablet is-one-quarter-desktop">
                <CardBox title="Property Law" paragraph={LoremIpsum} link="http://google.com" />
              </div>
              <div className="column is-half-tablet is-one-quarter-desktop">
                <CardBox title="Consumer Law" paragraph={LoremIpsum} />
              </div>
              <div className="column is-half-tablet is-one-quarter-desktop">
                <CardBox title="Consumer Law" paragraph={LoremIpsum} />
              </div>
              <div className="column is-half-tablet is-one-quarter-desktop">
                <CardBox title="Consumer Law" paragraph={LoremIpsum} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
