import React, { Component } from 'react'
import './style.css'
import SearchBarVoiceButton from './SearchBarVoiceButton.js';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
      this.onChange = this.onChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.state = {
      searchText: ""
    }
  }

  onChange(event) {
    console.log("Search text: " + event.target.value);
    this.setState({
        searchText: event.target.value
    });
  }

  onClick() {
    console.log("Todo: Call backend with query = " + this.state.searchText);
  }
  render() {
    return (
      <div className="searchActualBar">
        <div class="field has-addons">
          <div class="control">
            <input class="input glh-input" type="text" placeholder="Make a query" value={this.state.searchText} onChange={this.onChange} />
          </div>
          <div class="search-button">
            <a class="button glh-button" onClick={this.onClick}>Search</a>
          </div>
            <SearchBarVoiceButton
                submittedQuery={false}
                searchText={this.state.searchText}
                updateQueryCallback={(query) => this.setState({searchText: query})}
            />
        </div>
      </div>
        )
    }

}
