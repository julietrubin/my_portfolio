import React from 'react'
import ContactForm from './contactform'
import DeviceLayout from '../../common/device'
import styles from './contact.module.scss'


const Contact = () => {
    return (
        <DeviceLayout styles={styles}>
            <h1>contact me</h1>
            <ContactForm />
        </DeviceLayout>
  )
}

export default Contact