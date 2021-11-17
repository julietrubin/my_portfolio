import React from "react"

import * as styles from './styles.module.scss'


const Website = ({img, href, first=false}) => {
    let classN = `${styles.website}`;
    classN = first ? classN + ` ${styles.first}` : classN
    return (
        <div className={classN}> 
        {/* //{first ? styles.website : styles.website.first}> */}
            <a href={href} target="_blank">
                <img src={img}></img>
            </a>
        </div>
           
    )
}

export default Website