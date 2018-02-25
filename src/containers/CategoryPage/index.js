import React, { Component } from 'react'
import { AppHeader } from '../../components/AppHeader'
import { PageHeader } from '../../components/PageHeader'
import { SearchBar } from '../../components/SearchBar'
import { CardBlock } from '../../components/CardBlock'

const LoremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum ipsum sit'

const PropertyData = {
  title: 'Property Law',
  legislation: [
    {
      title: 'Property Law Act 1958',
      paragraph: 'Victorian law regarding property',
      link: 'http://www7.austlii.edu.au/cgi-bin/viewdb/au/legis/vic/consol_act/pla1958179/'
    },
    {
      title: 'Sale of Land Act 1962',
      paragraph: 'Victorian law regarding land titles',
      link: 'http://www7.austlii.edu.au/cgi-bin/viewdb/au/legis/vic/consol_act/sola1962100/'
    }
  ]
}

class CategoryPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="view-page">
        <AppHeader />
        <SearchBar />
        <PageHeader title={'Property Law'} subtitle="Category" />
        <section className="page">
          <div className="container">
            <CardBlock key="legislation" title="Legislation" cards={PropertyData.legislation} />
          </div>
        </section>
      </div>
    )
  }
}

export default CategoryPage
