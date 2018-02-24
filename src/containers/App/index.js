import React, { Component } from 'react'
import { AppHeader } from '../../components/AppHeader'
import { CardBox } from '../../components/CardBox'

const LoremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum ipsum sit'

class App extends Component {
  render() {
    return (
      <div className="homepage">
        <AppHeader />
        <section className="help-me glh-section">
          <div className="container">
            <h2>What can I help you with today?</h2>
            <div className="columns is-desktop">
              <div className="column">
                <CardBox title="Property Law" paragraph={LoremIpsum} link="http://google.com" />
              </div>
              <div className="column">
                <CardBox title="Consumer Law" paragraph={LoremIpsum} />
              </div>
              <div className="column">
                <CardBox title="Consumer Law" paragraph={LoremIpsum} />
              </div>
              <div className="column">
                <CardBox title="Consumer Law" paragraph={LoremIpsum} />
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <p>&copy; LegalEagle AI</p>
            <p>
              Built with{' '}
              <span class="icon is-small icon-heart">
                <i class="fas fa-heart" />
              </span>{' '}
              from Melbourne
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
