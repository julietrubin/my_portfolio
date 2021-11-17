import React from "react"

import Repository from "./repository"
import * as styles from './styles.module.scss'
import DeviceLayout from '../../common/device/index'


const Projects = ({repositories}) => {
    return (
        <DeviceLayout styles={styles}>
            <h1>projects</h1>
            <div className={styles.grid}>
                <div className={styles.repository}>
                <div >
                    <h3>
                        <a
                        href={`https://insidestudio54.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Inside Studio 54
                        </a>
                    </h3>
                    <div className={styles.description}>
                        <p>
                        Built with Webflow 

                        {/* {repo.homepageUrl && (
                            <>
                            {" -"} <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
                            </>
                        )} */}
                        </p>
                    </div>
                    
                    </div>
                </div>
                {repositories.nodes
                .map(repo => <Repository key={repo.name} repo={repo} />)
                .reverse()}
            </div>
        </DeviceLayout>
    )
}

export default Projects