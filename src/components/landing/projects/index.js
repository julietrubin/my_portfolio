import React from "react"

import Repository from "./repository"
import * as styles from './styles.module.scss'
import DeviceLayout from '../../common/device/index'
import studio54img from '../../../images/studio54.png'
import calculatorImg from '../../../images/calculator.png'
import Website from "./websites"


const Projects = ({repositories}) => {
    return (
        <DeviceLayout styles={styles}>
            <h1>websites</h1>
            <div className={styles.website_container} >
                <Website img={studio54img} href="https://insidestudio54.com" />

                <Website img={calculatorImg} href="https://calculator.julietrubin.com" />
            </div>

            <h1 style={{paddingTop: `40px`}}>github projects</h1>
            <div className={styles.grid}>
                {repositories.nodes
                .map(repo => <Repository key={repo.name} repo={repo} />)
                .reverse()}
            </div>
        </DeviceLayout>
    )
}

export default Projects