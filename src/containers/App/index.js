import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from '../HomePage'
import ResultsPage from '../ResultsPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/results" component={ResultsPage} />
        </div>
      </Router>
    )
  }
}

export default App
