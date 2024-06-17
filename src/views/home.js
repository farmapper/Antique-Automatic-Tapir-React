import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features1 from '../components/features1'
import Contact3 from '../components/contact3'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Antique Automatic Tapir</title>
        <meta property="og:title" content="Antique Automatic Tapir" />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero9
        image1Src="/stars%20and%20moon-1500w.jpeg"
        rootClassName="hero9-root-class-name"
      ></Hero9>
      <Features1></Features1>
      <Contact3></Contact3>
      <Footer1></Footer1>
    </div>
  )
}

export default Home
