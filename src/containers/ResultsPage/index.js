import React, { Component } from 'react'
import { AppHeader } from '../../components/AppHeader'
import { SearchBar } from '../../components/SearchBar'

class ResultsPage extends Component {
  constructor(props) {
    super(props)
    const searchParams = new URLSearchParams(this.props.location.search)
    if (searchParams.has('q')) {
      this.state = { query: searchParams.get('q') }
    } else {
      this.state = { query: null }
    }
  }
  render() {
    return (
      <div className="view-page">
        <AppHeader />
        <SearchBar />
        <section className="page-header">
          <div className="container">
            <span className="section-name">Results</span>
            <h2>Definition: {this.state.query}</h2>
          </div>
        </section>
        <section className="page">
          <div className="container">
            <div className="columns">
              <div className="column is-three-fifths">
                <h3>Current Interpretation</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in sem venenatis,
                  aliquam augue vitae, congue arcu. Curabitur dictum porta diam, et volutpat tellus
                  varius a. Donec nec leo tincidunt, scelerisque ligula a, varius sem. Phasellus
                  nisi lorem, tristique eget fringilla at, vulputate sit amet purus. Fusce a
                  efficitur lectus, in laoreet libero. Mauris pulvinar arcu et vehicula tincidunt.
                  Ut vitae interdum dui, nec volutpat purus. Aenean venenatis, nunc vel porttitor
                  tincidunt, metus felis ornare risus, ut auctor est velit vitae massa. Vivamus
                  massa purus, vulputate non congue aliquam, ornare placerat nunc. Nullam ac mauris
                  quis purus efficitur volutpat. In egestas viverra tellus in iaculis. Sed porttitor
                  feugiat euismod.
                </p>
                <p>
                  Aliquam justo nibh, eleifend vel iaculis vel, auctor ut est. In vehicula imperdiet
                  nisi nec laoreet. Pellentesque fermentum posuere justo rutrum blandit. Mauris at
                  erat vitae dui finibus iaculis eget vitae augue. In sed nulla facilisis, elementum
                  mauris eu, condimentum nisl. Aenean condimentum orci nec nibh lacinia, nec viverra
                  augue congue. In consequat quis nibh sed aliquet.
                </p>
                <h3>Case Law</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in sem venenatis,
                  aliquam augue vitae, congue arcu. Curabitur dictum porta diam, et volutpat tellus
                  varius a. Donec nec leo tincidunt, scelerisque ligula a, varius sem. Phasellus
                  nisi lorem, tristique eget fringilla at, vulputate sit amet purus. Fusce a
                  efficitur lectus, in laoreet libero. Mauris pulvinar arcu et vehicula tincidunt.
                  Ut vitae interdum dui, nec volutpat purus. Aenean venenatis, nunc vel porttitor
                  tincidunt, metus felis ornare risus, ut auctor est velit vitae massa. Vivamus
                  massa purus, vulputate non congue aliquam, ornare placerat nunc. Nullam ac mauris
                  quis purus efficitur volutpat. In egestas viverra tellus in iaculis. Sed porttitor
                  feugiat euismod.
                </p>
                <p>
                  Aliquam justo nibh, eleifend vel iaculis vel, auctor ut est. In vehicula imperdiet
                  nisi nec laoreet. Pellentesque fermentum posuere justo rutrum blandit. Mauris at
                  erat vitae dui finibus iaculis eget vitae augue. In sed nulla facilisis, elementum
                  mauris eu, condimentum nisl. Aenean condimentum orci nec nibh lacinia, nec viverra
                  augue congue. In consequat quis nibh sed aliquet.
                </p>

                <div className="citation" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ResultsPage
