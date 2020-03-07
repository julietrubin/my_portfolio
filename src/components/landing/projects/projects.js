import React from "react"

import Repository from "./repository"
import mystyles from './projects.module.scss'


const Projects = ({repositories}) => {
    return (
        <div>
            <h1>projects</h1>
            <div className={mystyles.grid}>
                {repositories.nodes
                .map(repo => <Repository key={repo.name} repo={repo} />)
                .reverse()}
            </div>
        </div>
    )
}

export default Projects