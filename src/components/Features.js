import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-6">
        <section className="section">
          <p className="has-text-centered">
            <img alt="" src={item.image} />
          </p>
          <p className="has-text-weight-bold has-text-centered is-size-5">{item.text}</p>
          <ul>
            {item.items.map(subitem => (
              <li key={subitem} className="is-size-8">
                {subitem}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default FeatureGrid
