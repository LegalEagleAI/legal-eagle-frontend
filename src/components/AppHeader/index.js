import React, { Component } from 'react'
import { SearchBar } from '../SearchBar/searchBar'

import './style.css'

const homepageHeader = (
  <header className="app-header app-header-homepage">
    <div className="container">
      <h1 className="app-title">LegalEagle</h1>
      <SearchBar />
    </div>
  </header>
)

const pageHeader = (
  <header className="app-header">
    <div className="container">
      <h1 className="app-title">LegalEagle</h1>
      <SearchBar />
    </div>
  </header>
)

export class AppHeader extends Component {
  render() {
    const { homepage } = this.props
    return homepage ? homepageHeader : pageHeader
  }
}
