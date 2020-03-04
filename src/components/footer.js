import React from "react"
import mystyles from './footer.module.scss'


const Footer = () => {
    return (
        <footer className={mystyles.footer}>
          © <a target="_blank" className={mystyles.my_portfolio} href="www.julietrubin.com">Juliet Rubin</a> 2020 
          Built with <a
						href="https://www.gatsbyjs.org"
                        target="_blank"
                        className={mystyles.svg}
					>
						<img width="24" src="/icons/gatsbyjs.svg" alt="GatsbyJS" />
					</a>
          Open sourced on <a
						href="https://www.github.com"
                        target="_blank"
                        className={mystyles.svg}
					>
						<img width="24" src="/icons/github.svg" alt="Github" />
					</a>
          and deployed on <a
						href="https://www.netlify.com"
                        target="_blank"
                        className={mystyles.svg}
					>
						<img width="24" src="/icons/netlify.svg" alt="Netlify" />
					</a>
        </footer>
    );
}

export default Footer