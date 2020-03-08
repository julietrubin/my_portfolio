import React from "react"

import { Link } from "gatsby"
import {isMobile} from 'react-device-detect';

import styles from './styles.module.scss'
import FollowMe from './follow-me'
import DeviceLayout from '../../common/device/index'

const AboutMe = ({avatarUrl}) => {
    return (
        <DeviceLayout styles={styles}>
            <h1 className={styles.header}>about me</h1>
            <div className={styles.content}>
                <div className={styles.text}>I'm a Software Engineer.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</div>
                <img
                    src={avatarUrl}
                    alt="avatar"
                    className={styles.avatar}
                />
                            </div>

                <FollowMe />
                {isMobile && (<Link to="/contact" className={styles.link}>contact me</Link>)}
                {isMobile && (<Link to="/projects" className={styles.link}>view projects</Link>)}
                {isMobile && (<a className={styles.link} href="https://gitconnected.com/julietrubin/resume" target="_blank" className={styles.link}>view resume</a>)}
        </DeviceLayout>
    );
}

export default AboutMe
