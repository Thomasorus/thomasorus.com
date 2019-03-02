import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Styles from "./index.css"

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: "I'm a front-end developper since 2015 and independant journalist specialized in fighting games since 2009." },
      ]}
      
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <div className="wrapper"> 
    {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`


