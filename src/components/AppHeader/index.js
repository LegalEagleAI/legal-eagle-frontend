import React, { Component } from 'react'
import { SearchBar } from '../SearchBar'

import './style.css'

const FrontPageHeader = (
  <header className="app-header app-header-homepage">
    <div className="container">
      <h1 className="app-title">LegalEagle</h1>
      homepage && <SearchBar />
    </div>
  </header>
)

const PageHeader = (
  <div>
    <header className="app-header">
      <div className="container ">
        <h1 className="app-title">LegalEagle</h1>
      </div>
    </header>
    <div className="searchbar">
      <div className="container">
        <SearchBar />
      </div>
    </div>
  </div>
)

export class AppHeader extends Component {
  render() {
    const { homepage } = this.props
    return homepage ? FrontPageHeader : PageHeader
  }
}
