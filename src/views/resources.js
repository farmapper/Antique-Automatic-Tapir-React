import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import CTA1 from '../components/cta1'
import ContentList1 from '../components/content-list1'
import Footer1 from '../components/footer1'
import './resources.css'

const Resources = (props) => {
  return (
    <div className="resources-container">
      <Helmet>
        <title>Resources - Antique Automatic Tapir</title>
        <meta
          property="og:title"
          content="Resources - Antique Automatic Tapir"
        />
      </Helmet>
      <Navbar4></Navbar4>
      <CTA1></CTA1>
      <ContentList1></ContentList1>
      <Footer1></Footer1>
    </div>
  )
}

export default Resources
