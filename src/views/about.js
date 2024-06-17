import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features11 from '../components/features11'
import Team1 from '../components/team1'
import Footer1 from '../components/footer1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Antique Automatic Tapir</title>
        <meta property="og:title" content="About - Antique Automatic Tapir" />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero8></Hero8>
      <Stats2></Stats2>
      <Logos1></Logos1>
      <Features11></Features11>
      <Team1></Team1>
      <Footer1></Footer1>
    </div>
  )
}

export default About
