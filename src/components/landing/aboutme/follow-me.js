import React from "react"
import mystyles from './follow-me.module.scss'
import classNames from 'classnames/bind';
import {isMobile} from 'react-device-detect';


const FollowMe = () => {
    let cx = classNames.bind(mystyles);
    let container = cx({
      mobile: isMobile, 
      desktop: !isMobile,
      container: true,
    });

    return (
        <div className={container}>
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
                <img width="24" src="/icons/t-icon.svg"  />
            </a>

            <a href="https://www.linkedin.com/in/julietrubin"
                target="_blank"
                className={mystyles.svg}
                aria-label="linkedin"
                rel="noopener noreferrer"
            >
                <img width="24" src="/icons/l-icon.svg" />
            </a>
        </div>
    );
}

export default FollowMe
