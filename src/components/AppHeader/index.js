import React, { Component } from 'react'
import { SearchBox } from '../SearchBox'

import './style.css'

const FrontPageHeader = (
  <header className="app-header app-header-homepage">
    <div className="container">
      <h1 className="app-title">
        <a href="/">LegalEagle</a>
      </h1>
      <SearchBox homepage />
    </div>
  </header>
)

const PageHeader = (
  <header className="app-header">
    <div className="container ">
      <h1 className="app-title">
        <a href="/">LegalEagle</a>
      </h1>
    </div>
  </header>
)

export class AppHeader extends Component {
  render() {
    const { homepage } = this.props
    return homepage ? FrontPageHeader : PageHeader
  }
}
