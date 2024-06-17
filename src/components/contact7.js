import React from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content thq-flex-row">
          <div className="contact7-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact7-content2 thq-flex-row">
          <div className="contact7-container1">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image thq-img-ratio-16-9"
            />
            <h3 className="contact7-text2 thq-heading-3">{props.location1}</h3>
            <p className="thq-body-large">{props.location1Description}</p>
            <div className="contact7-container2">
              <span className="thq-button-flat thq-body-small">
                Get directions
              </span>
            </div>
          </div>
          <div className="contact7-container3">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text5 thq-heading-3">{props.location2}</h3>
            <p className="thq-body-large">{props.location2Description}</p>
            <div className="contact7-container4">
              <span className="thq-button-flat thq-body-small">
                Get directions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  location2: 'Social Media',
  location2Description:
    'Follow us on social media for updates and community engagement.',
  location2ImgAlt: 'Social Media Icon',
  location1ImgAlt: 'Email Icon',
  location1ImgSrc:
    'https://images.unsplash.com/photo-1687360441027-27e70655b27e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMxMjM3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  location1: 'Email',
  location1Description:
    'Send us an email at support@maisaslegacy.com for any inquiries or support.',
  heading1: 'Contact Us',
  content1: 'We typically respond within 24 hours.',
  location2ImgSrc:
    'https://images.unsplash.com/photo-1581092459682-ccfffd6ddc37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMxMjM3OHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Contact7.propTypes = {
  location2: PropTypes.string,
  location2Description: PropTypes.string,
  location2ImgAlt: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  location1ImgSrc: PropTypes.string,
  location1: PropTypes.string,
  location1Description: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  location2ImgSrc: PropTypes.string,
}

export default Contact7
