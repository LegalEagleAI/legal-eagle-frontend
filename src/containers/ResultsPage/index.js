import React, { Component } from 'react'
import { AppHeader } from '../../components/AppHeader'
import { PageHeader } from '../../components/PageHeader'
import { SearchBar } from '../../components/SearchBar'

class ResultsPage extends Component {
  constructor(props) {
    super(props)
    const searchParams = new URLSearchParams(this.props.location.search)
    if (searchParams.has('q')) {
      this.state = { query: searchParams.get('q') }
    } else {
      this.state = { query: null }
    }
  }
  render() {
    return (
      <div className="view-page">
        <AppHeader />
        <SearchBar />
        <PageHeader title="Laybutt v Amoco Australia Pty Ltd (1974)" subtitle="Judgement" />
        <section className="page">
          <div className="container">
            <div className="columns">
              <div className="column is-2 body-copy">
                <h3>Legal Issue</h3>
                <p>Death of a Contracting Party, Lapse or Rejection of an offer</p>
              </div>
              <div className="column body-copy">
                <h3>Facts</h3>
                <ul>
                  <li>
                    Laybutt owned a piece of land, and he granted an option to Amoco to purchase the
                    land.
                  </li>
                  <li>
                    On 28th of July 1972 Mr Laybutt died. His widow was the executrix and sole
                    beneficiary of his estate.
                  </li>
                  <li>
                    On the 23rd of Oct 1972 Amoco served notice of exercise of the option on the
                    widow and delieved a cheque for the deposit to the solicitors acting for the
                    estate.
                  </li>
                  <li>
                    The widow’s lawyers argued that the option could not be exercised after the
                    death of the vendor.
                  </li>
                </ul>
              </div>
              <div className="column body-copy">
                <h3>Outcome</h3>
                <p>
                  As a general rule, upon the death of a party to a contract his liabilities
                  thereunder pass to his personal representatives. The rule does not apply if the
                  performance of the contract
                </p>
                <p>
                  Amoco still had the right to exercise the option - not withstanding the death of
                  Mr Laybutt.
                </p>
                <p>No binding contract between the appellant and the respondent.</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column body-copy">
                <h3>Other Links</h3>
                <a
                  className="button"
                  href="https://www.ato.gov.au/law/view/document?DocID=JUD%2F132CLR57%2F00003">
                  Read the Judgement
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ResultsPage
