import React, { Component } from 'react'
import { AppHeader } from '../../components/AppHeader'
import { AppFooter } from '../../components/AppFooter'
import { CardBox } from '../../components/CardBox'

const LoremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum ipsum sit'

class App extends Component {
  render() {
    return (
      <div className="view-page">
        <AppHeader />
        <section className="page-header">
          <div className="container">
            <span className="section-name">Results</span>
            <h2>Headline</h2>
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
        <AppFooter />
      </div>
    )
  }
}

export default App
