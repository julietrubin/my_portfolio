import React from "react"

import Repository from "./repository"
import styles from './styles.module.scss'
import DeviceLayout from '../../common/device/index'


const Projects = ({repositories}) => {
    return (
        <DeviceLayout styles={styles}>
            <h1>projects</h1>
            <div className={styles.grid}>
                {repositories.nodes
                .map(repo => <Repository key={repo.name} repo={repo} />)
                .reverse()}
            </div>
        </DeviceLayout>
    )
}

export default Projects