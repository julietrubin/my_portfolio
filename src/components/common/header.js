import React from "react"
import { Link } from "gatsby"

import mystyles from './header.module.scss'
import { slide as Menu } from 'react-burger-menu'
import {isMobile} from 'react-device-detect';


import './burger.css'

const Header = () => {
    if (isMobile) {
        return (
            <div className={mystyles.mobile}>
                <div className={mystyles.my_name}>Juliet Rubin</div>
                <Menu className={mystyles.menu} right outerContainerId={ "outer-container" } pageWrapId={ "page-wrap" } disableAutoFocus>
                    <HeaderLinks />
                </Menu>
            </div>
        );
    }
    else {
        return (
            <header className={mystyles.desktop}>
                <div className={mystyles.my_name}>Juliet Rubin</div>
                <HeaderLinks />
            </header>
        )
    }
}

const HeaderLinks = () => {
    return (
        <React.Fragment>
            <Link className={mystyles.link} to="/">home</Link>
            <Link className={mystyles.link} to="/contact">contact</Link>
            <Link className={mystyles.link} to="/projects">projects</Link>
            <a className={mystyles.link} href="https://gitconnected.com/julietrubin/resume" target="_blank">resume</a>
        </React.Fragment>
    );
}

export default Header
