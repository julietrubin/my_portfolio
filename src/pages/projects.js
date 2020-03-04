import React from "react"

import Layout from "../components/layout"
import Repository from "../components/repository"


const ProjectsPage = ({data}) => {
    const {repositories} = data.githubData.data.viewer;
    return (
        <Layout>
            

            <div style={{ maxWidth: `960px`, marginBottom: `1.45rem` }}>
                {repositories.nodes
                .map(repo => <Repository key={repo.name} repo={repo} />)
                .reverse()}
            </div>
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
