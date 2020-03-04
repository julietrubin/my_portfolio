import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutme"


const IndexPage = ({ data }) => {
  const {avatarUrl, name} = data.githubData.data.viewer;

  return (
    <Layout>
      <SEO title={`${name} repos`} />
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
