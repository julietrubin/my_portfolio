import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import {isMobile} from 'react-device-detect';
import mystyles from './layout.module.scss'
import classNames from 'classnames/bind';

import "./normalize.css"


const Layout = ({ children }) => {
  let cx = classNames.bind(mystyles);
  let container = cx({
    mobile: isMobile, 
    desktop: !isMobile,
  });

  return (
    <div className={container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


{/* <StaticQuery
query={graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`} */}