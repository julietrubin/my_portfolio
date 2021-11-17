import React from "react"

import { Link } from "gatsby"
import {MobileView} from 'react-device-detect';

import * as styles from './styles.module.scss'
import FollowMe from './follow-me'
import DeviceLayout from '../../common/device/index'

const AboutMe = ({avatarUrl}) => {
    return (
        <DeviceLayout styles={styles}>
            <h1 className={styles.header}>about me</h1>
                <div className={styles.content}>
                    <div className={styles.text}>I'm a Software Engineer with a passion for creating a great user experience and clean code. I have a 
                    Bachelors of Science, Cum Laude, in Computer Science from University of San Francisco.
                    My top languages and frameworks are Python/Django, Javascript/React.js, and Dart/Flutter. 
                    I started as a Backend Engineer, transitioned to Fullstack/Frontend and then learned Mobile Development for a personal project.
                     I enjoy creating new features, debugging, refactoring code, and the code review process. I'm currently doing freelance work with website builders to 
                     create easily maintainable and quick to produce websites. </div>
                    <img
                        src={avatarUrl}
                        alt="avatar"
                        className={styles.avatar}
                    />
                </div>

                <FollowMe />
                <MobileView>
                    <Link to="/contact" className={styles.link}>contact me</Link>
                    <Link to="/projects" className={styles.link}>view projects</Link>
                    <a className={styles.link} href="https://gitconnected.com/julietrubin/resume" target="_blank" className={styles.link}>view resume</a>
                </MobileView>
        </DeviceLayout>
    );
}

export default AboutMe
