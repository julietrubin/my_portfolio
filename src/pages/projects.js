import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/seo"
import Projects from "../components/landing/projects/projects"

const ProjectsPage = ({data}) => {
    const {repositories} = data.githubData.data.viewer;
    return (
        <Layout>
            <SEO title="Juliet Rubin | Projects" />
            <Projects repositories={repositories}/>
        </Layout>
    )
}

export default ProjectsPage


export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
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
