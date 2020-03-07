import React from "react"
import mystyles from './footer.module.scss'
import {isMobile} from 'react-device-detect';
import classNames from 'classnames/bind';

const Footer = () => {
    let cx = classNames.bind(mystyles);
    let container = cx({
      mobile: isMobile, 
      desktop: !isMobile,
      container: true
    });
  
    return (
        <footer className={container}>
            <div className={mystyles.my_portfolio} >
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
                    className={mystyles.svg}
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
                    className={mystyles.svg}
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
                    className={mystyles.svg}
                    aria-label="netlify"
                    rel="noopener noreferrer"
                >
                    <img width="24" src="/icons/netlify.svg" alt="Netlify" />
                </a>
            </div>
        </footer>
    );
}

export default Footer
