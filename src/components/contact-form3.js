import React from 'react'

import PropTypes from 'prop-types'

import './contact-form3.css'

const ContactForm3 = (props) => {
  return (
    <div className="contact-form3-contact9 thq-section-padding">
      <div className="thq-flex-row thq-section-max-width contact-form3-max-width">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="contact-form3-image1 thq-img-ratio-4-3"
        />
        <div className="contact-form3-content thq-flex-column">
          <div className="contact-form3-section-title thq-card">
            <span className="thq-body-small">{props.content2}</span>
            <div className="contact-form3-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <span className="thq-body-small">{props.content1}</span>
            </div>
          </div>
          <form
            action="https://formsubmit.co/confirm/12078bbf9e62aafcaffefaf66b786f3d"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="thq-card"
          >
            <div className="contact-form3-input">
              <label htmlFor="contact-form-3-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-3-name"
                required="true"
                placeholder="Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-input1">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-3-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-container">
              <label
                htmlFor="contact-form-3-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-3-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <div className="contact-form3-checkbox">
              <input
                type="checkbox"
                id="contact-form-3-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="contact-form-3-check"
                className="contact-form3-text6 thq-body-small"
              >
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form3-button thq-button-filled"
            >
              <span className="thq-body-small">{props.action}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm3.defaultProps = {
  content2: 'Get in touch with us',
  imageSrc: '/rose%20under%20stars-700w.jpeg',
  heading1: 'Contact us',
  content1: 'Contact us to ask about Maisa Space or Maisa',
  imageAlt: 'Image1',
  action: 'Submit',
}

ContactForm3.propTypes = {
  content2: PropTypes.string,
  imageSrc: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  imageAlt: PropTypes.string,
  action: PropTypes.string,
}

export default ContactForm3
