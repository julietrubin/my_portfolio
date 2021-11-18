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
                    <div className={styles.text}>I'm a Software Engineer with a passion for creating elegant websites and mobile apps. 
                    I have a Bachelors of Science, Cum Laude, in Computer Science from University of San Francisco.
                    After many years working at tech companies, I am now available for hire as a freelance developer.
                    </div>
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


// 'm a Software Engineer with a passion for creating a great user experience and clean code. I have a 
//                     Bachelors of Science, Cum Laude, in Computer Science from University of San Francisco. I have extensive experience as a Backend, Frontend, and Mobile Developer.
//                     My top languages and frameworks are Python/Django, Javascript/React.js, and Dart/Flutter. 
//                     I enjoy creating new features, debugging, refactoring code, and the code review process. After many years working for tech companies, I am now available for hire
//                     as a freelance Web Developer. I create elegant and easily maintainable websites for .

//I have extensive experience as a Backend, Frontend, and Mobile Developer.                     My top languages and frameworks are Python/Django, Javascript/React.js, and Dart/Flutter.
