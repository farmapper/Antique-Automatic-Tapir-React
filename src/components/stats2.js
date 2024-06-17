import React from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container1 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container2 thq-flex-column">
          <span className="thq-body-small">{props.content1}</span>
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="thq-body-large">{props.content2}</p>
          <div className="stats2-container3 thq-grid-2">
            <div className="stats2-container4">
              <h2 className="thq-heading-2">{props.stat1}</h2>
              <span className="thq-body-small">{props.stat1Description}</span>
            </div>
            <div className="stats2-container5">
              <h2 className="thq-heading-2">{props.stat2}</h2>
              <span className="thq-body-small">{props.stat2Description}</span>
            </div>
          </div>
          <div className="stats2-container6 thq-grid-2">
            <div className="stats2-container7">
              <h2 className="thq-heading-2">{props.stat3}</h2>
              <span className="thq-body-small">{props.stat3Description}</span>
            </div>
            <div className="stats2-container8">
              <h2 className="thq-heading-2">{props.stat4}</h2>
              <span className="thq-body-small">{props.stat4Description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat3: 'Astronomy',
  stat4Description: 'Empowerment through Math',
  stat3Description: 'Empowerment through Astronomy',
  image1Alt: 'Neurodivergent individuals',
  stat1: 'Neurodivergent individuals',
  content2:
    'of neurodivergent individuals are at a heightened risk of suicide compared to the general population.',
  stat1Description: 'Percentage at heightened risk',
  content1: '1 in 5',
  heading1: 'Statistics on Neurodivergent Individuals and Suicide Risk',
  image1Src:
    'https://images.unsplash.com/photo-1687360440731-d124aea41a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMxMTQzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  stat4: 'Mathematics',
  stat2Description: 'Heightened risk of suicide',
  stat2: '1 in 5',
}

Stats2.propTypes = {
  stat3: PropTypes.string,
  stat4Description: PropTypes.string,
  stat3Description: PropTypes.string,
  image1Alt: PropTypes.string,
  stat1: PropTypes.string,
  content2: PropTypes.string,
  stat1Description: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  stat4: PropTypes.string,
  stat2Description: PropTypes.string,
  stat2: PropTypes.string,
}

export default Stats2
