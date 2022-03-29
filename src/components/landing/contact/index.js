import React from 'react'
import ContactForm from './contactform'
import DeviceLayout from '../../common/device/index'
import * as styles from './styles.module.scss'
import computer from '../../../images/computer.png'



const Contact = () => {
    return (
        <DeviceLayout styles={styles}>
            <div className={styles.row}>
                <div className={styles.column} >
                <h1>contact me</h1>

                <ContactForm />
                </div>
                <div className={styles.column} >
                <img src={computer} className={styles.computer}></img>

                </div>
            </div>


{/* <table className={styles.row}>
                <tr>
                    <td>
                <ContactForm />
                </td>
                <td className={styles.column} >
                <img src={computer} className={styles.computer}></img>
</td>
                </tr>
            </table> */}
        </DeviceLayout>
  )
}

export default Contact