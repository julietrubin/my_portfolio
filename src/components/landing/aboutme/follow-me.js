import React from "react"
import styles from './styles.module.scss'
import DeviceLayout from '../../common/device/index'

const FollowMe = () => {
    return (
        <DeviceLayout styles={styles}>
            <div className={styles.header}>Follow me on</div>
            <a href="https://www.github.com/julietrubin"
                target="_blank"
                className={styles.svg}
                aria-label="github"
                rel="noopener noreferrer"
            >
                <img width="24" src="/icons/github.svg" alt="Github" />
            </a>

            <a href="https://www.twitter.com/julietrubin"
                target="_blank"
                className={styles.svg}
                aria-label="twitter"
                rel="noopener noreferrer"
            >
                <img width="24" src="/icons/t-icon.svg"  />
            </a>

            <a href="https://www.linkedin.com/in/julietrubin"
                target="_blank"
                className={styles.svg}
                aria-label="linkedin"
                rel="noopener noreferrer"
            >
                <img width="24" src="/icons/l-icon.svg" />
            </a>
        </DeviceLayout>
    );
}

export default FollowMe
