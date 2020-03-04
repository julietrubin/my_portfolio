import React from "react"
import { Link } from "gatsby"

import mystyles from './header.module.scss'


const Header = () => {
    return (
        <header className={mystyles.header}>
            <div className={mystyles.name}>Juliet Rubin</div>
            <Link className={mystyles.link} to="/">home</Link>
            <Link className={mystyles.link} to="/contact">contact</Link>
            <Link className={mystyles.link} to="/projects">projects</Link>
            <a className={mystyles.link} href="https://gitconnected.com/julietrubin/resume" target="_blank">resume</a>
        </header>
    );
}

export default Header
