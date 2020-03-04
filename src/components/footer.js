import React from "react"
import mystyles from './footer.module.scss'


const Footer = () => {
    return (
        <footer className={mystyles.footer}>
            © 
            <a href="https://www.julietrubin.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Juliet Rubin's Portfolio"
                className={mystyles.my_portfolio} 
            >
                Juliet Rubin
            </a>
            2020 Built with 
            <a href="https://www.gatsbyjs.org"
                target="_blank"
                className={mystyles.svg}
                aria-label="GatsbyJS"
                rel="noopener noreferrer"
            >
                <img width="24" src="/icons/gatsbyjs.svg" alt="GatsbyJS" />
            </a>
            Open sourced on
            <a href="https://www.github.com"
                target="_blank"
                className={mystyles.svg}
                aria-label="github"
                rel="noopener noreferrer"
            >
                <img width="24" src="/icons/github.svg" alt="Github" />
            </a>
            and deployed on 
            <a href="https://www.netlify.com"
                target="_blank"
                className={mystyles.svg}
                aria-label="netlify"
                rel="noopener noreferrer"
            >
                <img width="24" src="/icons/netlify.svg" alt="Netlify" />
            </a>
        </footer>
    );
}

export default Footer
