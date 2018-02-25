import React, { Component } from 'react'
import { CardBox } from '../CardBox'

export class CardBlock extends Component {
  render() {
    const { title, cards } = this.props
    return (
      <section className="card-block">
        <h3 className="section-title">{title}</h3>
        <div className="columns is-multiline">
          {cards.map(({ title, paragraph, link }) => {
            return (
              <div className="column is-half-tablet is-one-quarter-desktop">
                <CardBox title={title} paragraph={paragraph} link={link} />
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}
