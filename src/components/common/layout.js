import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Header from "./header"
import styles from './layout.module.scss'

import "./normalize.css"
import DeviceLayout from "./device"


const Layout = ({ children }) => {
  return (
    <DeviceLayout styles={styles}>
      <Header />
      <main>{children}</main>
      <Footer />
    </DeviceLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout