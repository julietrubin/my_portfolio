import React from 'react'
import ContactForm from './contactform'
import DeviceLayout from '../../common/device/index'
import * as styles from './styles.module.scss'
import computer from '../../../images/computer.png'



const Contact = () => {
    return (
        <DeviceLayout styles={styles}>
            <div className={styles.background}>
                <img src={computer} className={styles.computer}></img>
            </div>
            <div className={styles.contact} >
                <h1>contact me</h1>
                <ContactForm />
            </div>
        </DeviceLayout>
  )
}

export default Contact