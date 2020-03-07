import React from "react"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import Contact from "../components/landing/contact/contact"


const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Juliet Rubin | Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage