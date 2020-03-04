import React from "react"
import { graphql } from "gatsby"

import Repository from "../components/repository"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import AboutMe from "../components/aboutme"


const IndexPage = ({ data }) => {
  const {
    name,
    avatarUrl,
    repositories,
  } = data.githubData.data.viewer

  return (
    <Layout>
      <SEO title={`${name} repos`} />
      <AboutMe avatarUrl={avatarUrl} />

      <div style={{ maxWidth: `960px`, marginBottom: `1.45rem` }}>
        <Contact />
        {repositories.nodes
          .map(repo => <Repository key={repo.name} repo={repo} />)
          .reverse()}
      </div>
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
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
