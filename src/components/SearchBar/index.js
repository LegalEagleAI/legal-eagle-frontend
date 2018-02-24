import React, { Component } from 'react'
import './style.css'

export class SearchBar extends Component {
  render() {
    const { homepage } = this.props
    const className = homepage ? 'searchActualBar homepage' : 'searchActualBar'
    return (
      <form className={className} method="GET" action="/Results">
        <div class="field has-addons">
          <div class="control">
            <input class="input glh-input" type="text" placeholder="Find a repository" />
          </div>
          <div class="search-button">
            <input type="submit" className="button glh-button" value="Search" />
          </div>
        </div>
      </form>
    )
  }
}
