import React from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div className="features11-layout251 thq-section-padding">
      <div className="features11-max-width thq-section-max-width">
        <div className="thq-flex-row features11-section-title">
          <div className="features11-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features11-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features11-content">
          <div className="features11-row thq-flex-row">
            <div className="features11-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features11-feature1-image"
              />
              <div className="features11-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features11-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features11-feature2-image"
              />
              <div className="features11-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features11-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features11-feature3-image"
              />
              <div className="features11-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features11-actions">
          <button className="thq-button-filled features11-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features11-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  slogan: 'Empowering Neurodiversity Through Astronomy',
  feature1Description:
    'Access a wide range of resources, including articles, guides, and support networks, to help navigate the challenges faced by neurodivergent individuals.',
  mainAction: 'Discover Resources',
  feature3Description:
    'Engage in interactive workshops focused on math and science, promoting learning and exploration in a welcoming environment that celebrates neurodiversity.',
  feature2Description:
    'Participate in virtual stargazing events and connect with others who share a passion for astronomy, creating a supportive and inclusive community.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1598118538790-f04d31348896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMxMTQzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Stargazing Events',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1581578405048-b6f813432ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMxMTQzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Resource Library',
  sectionTitle: 'Features',
  feature1ImageAlt: 'Resource Library Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1581089784209-f2e9b2e20d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMxMTQzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription:
    'Explore the unique features of our platform dedicated to raising awareness about the heightened risk of suicide for neurodivergent individuals.',
  feature3Title: 'Math and Science Workshops',
  secondaryAction: 'Join Our Community',
  feature2ImageAlt: 'Stargazing Events Image',
  feature3ImageAlt: 'Math and Science Workshops Image',
}

Features11.propTypes = {
  slogan: PropTypes.string,
  feature1Description: PropTypes.string,
  mainAction: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3Title: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
}

export default Features11
