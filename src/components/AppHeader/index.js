import React, { Component } from 'react';
import './style.css';

import { SearchBar } from '../SearchBar/searchBar';

export class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="container">
            <h1 className="app-title">LegalEagle</h1>
            <SearchBar />
        </div>
      </header>
    );
  }
}