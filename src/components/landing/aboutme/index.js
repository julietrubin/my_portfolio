import React from "react"

import { Link } from "gatsby"
import { MobileView } from 'react-device-detect';

import * as styles from './styles.module.scss'
import FollowMe from './follow-me'
import DeviceLayout from '../../common/device/index'

const AboutMe = ({ avatarUrl }) => {
    return (
        <DeviceLayout styles={styles}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1 className={styles.header}>about me</h1>

                    <p>Juliet Rubin is a seasoned Full Stack Web and Mobile App Developer with a proven track record of creating exceptional user experiences. Proficient in multiple programming languages and frameworks, she excels in spearheading mission-critical projects. With a Bachelor's of Science, Cum Laude, in Computer Science from the University of San Francisco, she brings over a decade of experience to the tech industry. Her expertise lies in crafting user-centric applications, and consistently delivering high-quality work. Juliet's commitment to continuous learning keeps her at the forefront of emerging technologies. Throughout her career, she has led pivotal projects, ensuring innovation and top-notch quality. Juliet's adaptability and versatility make her an invaluable asset for tech ventures, and her dedication to staying updated with industry trends make her a valuable addition to any team.</p>
                    <FollowMe />
                </div>
                <img
                    src={avatarUrl}
                    alt="avatar"
                    className={styles.avatar}
                />
            </div>


            <MobileView>
                <Link to="/contact" className={styles.link}>contact me</Link>
                <Link to="/projects" className={styles.link}>view projects</Link>
                <a className={styles.link} href="https://gitconnected.com/julietrubin/resume" target="_blank">view resume</a>
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
