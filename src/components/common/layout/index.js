import React from "react"
import PropTypes from "prop-types"
import Footer from "../footer/index"
import Header from "../header/index"
import styles from './styles.module.scss'

import "./normalize.css"
import DeviceLayout from "../device"


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