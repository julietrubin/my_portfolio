import React from "react"
import mystyles from './aboutme.module.scss'
import FollowMe from './follow-me'
import { Link } from "gatsby"


const AboutMe = ({avatarUrl}) => {
    return (
        <div className={mystyles.about_me_section}>
            <h1 className={mystyles.header}>about me</h1>
            <div className={mystyles.about_me}>I'm a Software Engineer.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</div>
            <img
                src={avatarUrl}
                alt="avatar"
                className={mystyles.avatar}
            />
            <FollowMe />
            <Link to="/contact">contact me</Link>
            <a className={mystyles.link} href="https://gitconnected.com/julietrubin/resume" target="_blank">view resume</a>
            <Link to="/projects">view projects</Link>


        </div>
    );
}

export default AboutMe
