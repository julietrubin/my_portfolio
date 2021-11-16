import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import {isMobile} from 'react-device-detect';

import * as styles from './styles.module.scss'
import './burger.css'

const Header = () => {
    if (isMobile) {
        return (
            <div className={styles.mobile}>
                <div className={styles.my_name}>Juliet Rubin</div>
                <Menu className={styles.menu} right outerContainerId={ "outer-container" } pageWrapId={ "page-wrap" } disableAutoFocus>
                    <HeaderLinks />
                </Menu>
            </div>
        );
    }
    else {
        return (
            <header className={styles.desktop}>
                <div className={styles.my_name}>Juliet Rubin</div>
                <HeaderLinks />
            </header>
        )
    }
}

const HeaderLinks = () => {
    return (
        <React.Fragment>
            <Link className={styles.link} to="/">home</Link>
            <Link className={styles.link} to="/contact">contact</Link>
            <Link className={styles.link} to="/projects">projects</Link>
            <a className={styles.link} href="https://gitconnected.com/julietrubin/resume" target="_blank">resume</a>
        </React.Fragment>
    );
}

export default Header
