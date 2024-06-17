import React from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-section-max-width thq-flex-column">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text thq-heading-1">{props.heading1}</h1>
            <p className="hero8-text1 thq-body-large">{props.content1}</p>
            <div className="hero8-actions">
              <button className="thq-button-filled hero8-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero8-button1">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  heading1: 'Empowering Neurodivergent Individuals in Math and Science',
  action1: 'Learn More',
  image1Alt: 'Image of Maisa looking at the stars',
  content1:
    'Join us in raising awareness about the heightened risk of suicide for neurodivergent individuals.',
  image1Src:
    'https://images.unsplash.com/photo-1576670263020-7842552c87d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMxMTQzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Get Involved',
}

Hero8.propTypes = {
  heading1: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  action2: PropTypes.string,
}

export default Hero8
