import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer1 from '../components/footer1'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Antique Automatic Tapir</title>
        <meta property="og:title" content="Contact - Antique Automatic Tapir" />
      </Helmet>
      <Navbar4></Navbar4>
      <ContactForm3></ContactForm3>
      <Contact14></Contact14>
      <Contact7></Contact7>
      <Footer1></Footer1>
    </div>
  )
}

export default Contact
