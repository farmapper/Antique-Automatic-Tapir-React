import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-container">
            <div className="features1-column thq-flex-column">
              <h2 className="thq-heading-2 features1-text">
                {props.sectionTitle}
              </h2>
            </div>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
      <div className="features1-container1">
        <svg viewBox="0 0 1243.4285714285713 1024" className="features1-icon">
          <path d="M354.286 640c-39.429 22.857-93.143 36.571-153.143 36.571h-73.143v-36.571h-36.571c-10.286 0-18.286-20.571-18.286-45.714 0-10.286 1.714-20 4-28-44-1.143-77.143-8.571-77.143-17.714s33.143-16.571 77.143-17.714c-2.286-8-4-17.714-4-28 0-25.143 8-45.714 18.286-45.714h36.571v-36.571h73.143c60 0 113.714 13.714 153.143 36.571h636c42.286 7.429 80.571 13.714 106.857 18.286 109.714 18.286 146.286 54.857 146.286 73.143s-36.571 54.857-146.286 73.143c-26.286 4.571-64.571 10.857-106.857 18.286h-636zM993.714 496c18.286 12.571 30.286 31.429 30.286 52.571s-12 40-30.286 52.571l46.286 17.143c23.429-16.571 38.857-41.714 38.857-69.714s-15.429-53.143-38.857-69.714zM357.143 649.143h580s-124 21.714-260.571 45.714c-73.143 0-128 54.857-128 54.857l-164.571 164.571s-55.429 36.571-91.429 36.571h-54.857l-53.143-265.143h16.571c58.286 0 113.714-13.143 156-36.571zM201.143 411.429h-16.571l53.143-265.143h54.857c37.143 0 73.143 18.286 91.429 36.571l164.571 164.571c0 0 54.857 54.857 128 54.857 136.571 24 260.571 45.714 260.571 45.714h-580c-42.286-23.429-97.714-36.571-156-36.571z"></path>
        </svg>
        <span className="thq-body-small">{props.slogan}</span>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  mainAction: 'Learn More',
  sectionTitle: 'Features',
  feature2ImageAlt: 'Dark Skies Sanctuary Image',
  feature3Title: "Let's Make Constellations",
  feature3Description:
    'Empower neurodivergent individuals to connect with each other and the world to connect back.  We need to change ourselves, and our society, to make this a world that neurodivergent kids can thrive in.',
  slogan: 'Shining a light on neurodiversity',
  feature1Title: 'Starry Connections',
  feature3ImageSrc: '/infinite%20rose%20field%20minecraft-300h.jpeg',
  feature2Description:
    'Immerse yourself in the serene beauty of dark skies, symbolizing the calm and safe space we are dedicated to fostering for neurodivergent individuals. Let the tranquil atmosphere inspire a sense of peace and belonging.',
  sectionDescription:
    'Explore the key features of our platform that aim to raise awareness and support neurodivergent individuals in memory of Maisa.',
  feature3ImageAlt: 'Math & Science Empowerment Image',
  feature1ImageAlt: 'Starry Connections Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1581937019650-bb34507b7d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMxMDUxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  secondaryAction: 'Get Involved',
  feature2ImageSrc: '/img_20240613_153507-300h.jpg',
  feature2Title: 'Dark Skies',
  feature1Description:
    'Explore the beauty of constellations mirroring our mission to connect and uplift neurodivergent individuals.',
}

Features1.propTypes = {
  mainAction: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3Description: PropTypes.string,
  slogan: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features1
