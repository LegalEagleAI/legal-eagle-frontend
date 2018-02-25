import React, { Component } from 'react'

import './style.css'

export class PageHeader extends Component {
  render() {
    const { subtitle, title } = this.props
    return (
      <section className="page-header">
        <div className="container">
          <span className="section-name">{subtitle}</span>
          <h2>{title}</h2>
        </div>
      </section>
    )
  }
}
