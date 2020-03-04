import React from "react"
import mystyles from './header.module.scss'


const Header = () => {
    return (
        <header className={mystyles.header}>
            <a className={mystyles.link} href="https://gitconnected.com/julietrubin/resume" target="_blank">resume</a>
        </header>
    );
}

export default Header
