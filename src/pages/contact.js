import React from "react"

import Layout from "../components/common/layout/index"
import SEO from "../components/common/seo/index"
import Contact from "../components/landing/contact/index"


const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Juliet Rubin | Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage