import React from "react"
import * as styles from './styles.module.scss'
import DeviceWrapper from '../device'

const Footer = () => {
    return (
        <DeviceWrapper styles={styles} tag="footer">
            <div className={styles.my_portfolio} >
                © 
                <a href="https://www.julietrubin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Juliet Rubin's Portfolio"
                >
                    Juliet Rubin
                </a>
            </div>
            <div>
                2020 Built with 
                <a href="https://www.gatsbyjs.org"
                    target="_blank"
                    className={styles.svg}
                    aria-label="GatsbyJS"
                    rel="noopener noreferrer"
                >
                    <img width="24" src="/icons/gatsbyjs.svg" alt="GatsbyJS" />
                </a>
            </div>
            <div>
                Open sourced on
                <a href="https://www.github.com"
                    target="_blank"
                    className={styles.svg}
                    aria-label="github"
                    rel="noopener noreferrer"
                >
                    <img width="24" src="/icons/github.svg" alt="Github" />
                </a>
            </div>
            <div>
                and deployed on 
                <a href="https://www.netlify.com"
                    target="_blank"
                    className={styles.svg}
                    aria-label="netlify"
                    rel="noopener noreferrer"
                >
                    <img width="24" src="/icons/netlify.svg" alt="Netlify" />
                </a>
            </div>
        </DeviceWrapper>
    );
}

export default Footer
