import React, { Component } from 'react'

import { SearchBox } from '../SearchBox'
import './style.css'

export class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <div className="container">
          <SearchBox />
        </div>
      </div>
    )
  }
}
