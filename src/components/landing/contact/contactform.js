import React from 'react'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'
import styles from './styles.module.scss'
import Recaptcha from 'react-google-recaptcha'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  } 

const ContactForm = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={({ name, email, message, recaptcha }, { setSubmitting, setFieldValue, resetForm }) => {
                fetch("/?no-cache=1", {   
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: encode({
                        'form-name': 'contact',
                        name,
                        email,
                        message,
                        'g-recaptcha-response': recaptcha,
                    }),
                })
                .then(() => {
                    resetForm();
                    setSubmitting(false)
                    setFieldValue('success', true)
                })
                .catch(error => {
                    alert('Error: Please Try Again!')                            
                    setSubmitting(false)
                })
            }}
            render={(data) => ( <Form {...data} /> )}
        />
  )
}



const Form = ({touched, submitCount, errors, isSubmitting, handleSubmit, 
    values, setFieldValue}) => {

    return (
        <form className={styles.form}
            name='contact'
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}
            data-netlify='true'
            data-netlify-honeypot='bot-field'
        >
            <div className='field'>
                <Field
                    className={styles.input}
                    type='text'
                    name='name'
                    placeholder='name'
                />
                {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className='field'>
                <Field
                    className={styles.input}
                    type='text'
                    name='email'
                    placeholder='email'
                />
                {touched.email && errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className='field'>
                <Field
                    className={styles.input}
                    placeholder='message'
                    name='message'
                    component='textarea'
                    rows='6'
                />
                {touched.message && errors.message && <p className={styles.error}>{errors.message}</p>}
            </div>
            {values.name && values.email && values.message && (
                <div className={styles.recapcha}>
                    <Field
                        component={Recaptcha}
                        sitekey={RECAPTCHA_KEY}
                        name="recaptcha"
                        onChange={value => setFieldValue('recaptcha', value)}
                    />
                    {errors.recaptcha && submitCount > 0 && <p className={styles.error}>{errors.recaptcha}</p>}
                </div>
            )}
            <div className='buttons'>
                <input name='submit' type='submit' disabled={isSubmitting} value='Send'
                className={styles.button} />
            </div>
            {values.success && !touched.name && (
                <p className={styles.success}>
                    Your message has been sent.
                </p>
            )}
        </form>
    )
}

export default ContactForm
