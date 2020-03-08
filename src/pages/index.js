import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/seo"
import AboutMe from "../components/landing/aboutme/aboutme"


const IndexPage = ({ data }) => {
  const {avatarUrl} = data.githubData.data.viewer;

  return (
    <Layout>
      <SEO title="Juliet Rubin" />
      <AboutMe avatarUrl={avatarUrl} />
    </Layout>
  )
}

export default IndexPage

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
          name
          avatarUrl
        }
      }
    }
  }
`
