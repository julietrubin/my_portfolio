import React from 'react'
import ContactForm from './contactform'
import DeviceLayout from '../../common/device/index'
import * as styles from './styles.module.scss'


const Contact = () => {
    return (
        <DeviceLayout styles={styles}>
            <h1>contact me</h1>
            <ContactForm />
        </DeviceLayout>
  )
}

export default Contact