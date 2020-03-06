import React from "react"

import Layout from "../components/layout"
import Repository from "../components/repository"
import SEO from "../components/seo"

import mystyles from '../components/projects.module.scss'


const ProjectsPage = ({data}) => {
    const {repositories} = data.githubData.data.viewer;
    return (
        <Layout>
                <SEO title="Juliet Rubin | Projects" />
            <div className={mystyles.grid}>
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
