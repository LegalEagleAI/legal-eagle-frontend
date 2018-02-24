import React, { Component } from 'react'
import { SearchBar } from '../SearchBar'

import './style.css'

export class AppHeader extends Component {
  render() {
    const { homepage } = this.props
    const className = homepage ? 'app-header app-header-homepage' : 'app-header'
    return (
      <header className={className}>
        <div className="container">
          <h1 className="app-title">LegalEagle</h1>
          <SearchBar />
        </div>
      </header>
    )
  }
}
