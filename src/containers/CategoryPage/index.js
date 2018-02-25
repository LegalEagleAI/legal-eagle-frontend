import React, { Component } from 'react'
import { AppHeader } from '../../components/AppHeader'
import { PageHeader } from '../../components/PageHeader'
import { SearchBar } from '../../components/SearchBar'
import { CardBlock } from '../../components/CardBlock'

const LoremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum ipsum sit'

const PropertyData = {
  title: 'Property Law',
  popularConcepts: [
    {
      title: 'Property Law',
      paragraph: LoremIpsum,
      link: 'http://google.com'
    },
    {
      title: 'Consumer Law',
      paragraph: LoremIpsum,
      link: 'http://google.com'
    }
  ],
  legislation: [
    {
      title: 'Property Law',
      paragraph: LoremIpsum,
      link: 'http://google.com'
    },
    {
      title: 'Consumer Law',
      paragraph: LoremIpsum,
      link: 'http://google.com'
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
            <CardBlock
              key="popularConcepts"
              title="Popular Concepts"
              cards={PropertyData.popularConcepts}
            />
            <CardBlock key="legislation" title="Legislation" cards={PropertyData.legislation} />
          </div>
        </section>
      </div>
    )
  }
}

export default CategoryPage
