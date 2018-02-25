import React, { Component } from 'react'
import SearchBarVoiceButton from './SearchBarVoiceButton'

import './style.css'

export class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = {
      searchText: ''
    }
  }

  onChange(event) {
    console.log('Search text: ' + event.target.value)
    this.setState({
      searchText: event.target.value
    })
  }

  onClick() {
    // TODO: Get API result.
    console.log('Todo: Call backend with query = ' + this.state.searchText)
    var result = new SpeechSynthesisUtterance(
      'Results for your query ' + this.state.searchText + ' are'
    )
    result.voice = speechSynthesis.getVoices().filter(function(voice) {
      return voice.name === 'Alex'
    })[0]
    speechSynthesis.speak(result)
    // Do we want it to say the results?
  }

  render() {
    const { homepage } = this.props
    const className = homepage ? 'searchActualBar homepage' : 'searchActualBar'
    return (
      <form className={className} method="GET" action="/Results">
        <div className="field has-addons">
          <div className="control">
            <input
              name="q"
              className="input glh-input"
              type="text"
              placeholder="Make a query"
              value={this.state.searchText}
              onChange={this.onChange}
            />
          </div>
          <div className="search-button">
            <SearchBarVoiceButton
              submittedQuery={false}
              searchText={this.state.searchText}
              updateQueryCallback={query => this.setState({ searchText: query })}
            />
            <input type="submit" className="button glh-button glh-button-end" value="Search" />
          </div>
        </div>
      </form>
    )
  }
}
