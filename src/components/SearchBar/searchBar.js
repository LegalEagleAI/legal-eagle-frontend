import React, { Component } from 'react';

export class SearchBar extends Component {
    render() {
      return (
        <div className="searchActualBar">
            <div class="field has-addons">
                <div class="control">
                    <input class="input" type="text" placeholder="Find a repository"/>
                </div>
                <div class="search-button">
                    <a class="button is-info">
                    Search
                    </a>
                </div>
            </div>
        </div>
        
      );
    }
  }