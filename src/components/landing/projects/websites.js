import React from "react"

import * as styles from './styles.module.scss'


const Website = ({img, href}) => {
    return (
        <div className={styles.website}> 
            <a href={href} target="_blank">
                <img src={img}></img>
            </a>
        </div>
           
    )
}

export default Website