import React, { Component } from 'react'
import './style.css'

export class SearchBar extends Component {
  render() {
    return (
      <div className="searchActualBar">
        <div class="field has-addons">
          <div class="control">
            <input class="input glh-input" type="text" placeholder="Find a repository" />
          </div>
          <div class="search-button">
            <a class="button glh-button">Search</a>
          </div>
        </div>
      </div>
    )
  }
}
