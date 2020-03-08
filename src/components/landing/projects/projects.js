import React from "react"

import Repository from "./repository"
import styles from './projects.module.scss'

import {isMobile} from 'react-device-detect';
import classNames from 'classnames/bind';



const Projects = ({repositories}) => {
    return (
        <div>
            <h1>projects</h1>
            <div className={styles.grid}>
                {repositories.nodes
                .map(repo => <Repository key={repo.name} repo={repo} />)
                .reverse()}
            </div>
        </div>
    )
}

export default Projects