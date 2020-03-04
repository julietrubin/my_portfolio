import React from "react"
import mystyles from './follow-me.module.scss'


const FollowMe = () => {
    return (
        <div className={mystyles.follow_me}>
            <div className={mystyles.header}>Follow me on</div>
            <a href="https://www.github.com/julietrubin"
                target="_blank"
                className={mystyles.svg}
                aria-label="github"
                rel="noopener noreferrer"
            >
                <img width="24" src="/icons/github.svg" alt="Github" />
            </a>

            <a href="https://www.twitter.com/julietrubin"
                target="_blank"
                className={mystyles.svg}
                aria-label="twitter"
                rel="noopener noreferrer"
            >
                <img width="24" src="/icons/twitter.svg" alt="Twitter" />
            </a>

            <a href="https://www.linkedin.com/in/julietrubin"
                target="_blank"
                className={mystyles.svg}
                aria-label="linkedin"
                rel="noopener noreferrer"
            >
                <img width="24" src="/icons/linkedin.svg" alt="Linkedin" />
            </a>
        </div>
    );
}

export default FollowMe