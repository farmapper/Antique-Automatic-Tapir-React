import React from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2 className="content-list1-heading1 thq-heading-2">
                {props.heading1}
              </h2>
              <p className="thq-body-small">{props.content1}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading2}</h3>
              <p className="thq-body-small">{props.content2}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading3}</h3>
              <p className="thq-body-small">{props.content3}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading4}</h3>
              <p className="thq-body-small">{props.content4}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading5}</h3>
              <p className="thq-body-small">{props.content5}</p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">{props.heading6}</h3>
              <p className="thq-body-small">{props.content6}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  content2:
    'Find a variety of resources including helplines, online support groups, and informational articles to help individuals navigate their mental health challenges.',
  content1:
    "Learn about the increased risk of suicide among neurodivergent individuals and how Maisa's legacy inspired this platform to raise awareness and provide support.",
  content3:
    'Discover ways to get involved in supporting neurodiversity, whether through volunteering, donations, or spreading awareness in your community.',
  content4:
    'Explore strategies for creating a peaceful and inclusive environment for neurodivergent individuals to thrive and feel supported.',
  heading2: 'Resources for Support',
  heading5: 'Empowering Neurodivergent Individuals in Math and Science',
  content6:
    'Become part of our supportive community dedicated to promoting neurodiversity, sharing stories, and fostering a sense of belonging.',
  heading4: 'Creating a Peaceful Environment',
  heading1: 'About Neurodiversity and Suicide Risk',
  heading6: 'Join Our Community',
  heading3: 'Get Involved',
  content5:
    'Find out how this platform aims to empower neurodivergent individuals in math and science fields, providing opportunities for growth and success.',
}

ContentList1.propTypes = {
  content2: PropTypes.string,
  content1: PropTypes.string,
  content3: PropTypes.string,
  content4: PropTypes.string,
  heading2: PropTypes.string,
  heading5: PropTypes.string,
  content6: PropTypes.string,
  heading4: PropTypes.string,
  heading1: PropTypes.string,
  heading6: PropTypes.string,
  heading3: PropTypes.string,
  content5: PropTypes.string,
}

export default ContentList1
