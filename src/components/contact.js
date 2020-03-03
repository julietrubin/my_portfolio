import React from 'react'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'
import mystyles from './contact.module.scss'
import Recaptcha from 'react-google-recaptcha'
const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;
const config = require("../../config/site")

const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const ContactForm = () => {
    console.log({RECAPTCHA_KEY})
    console.log({GITHUB_API_TOKEN})
    console.log(process.env)
    console.log({config})
    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, setFieldValue, resetForm }) => {
                fetch("/?no-cache=1", {   
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: encode({
                        'form-name': 'contact',
                        ...values,
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
            render={({
                touched,
                errors,
                isSubmitting,
                handleSubmit,
                values,
                setFieldValue,
            }) => (
                <form className='form'
                    name='contact'
                    data-netlify-recaptcha="true"
                    onSubmit={handleSubmit}
                    data-netlify='true'
                    data-netlify-honeypot='bot-field'
                >
                    <div className='field'>
                        <Field
                            className={mystyles.input}
                            type='text'
                            name='name'
                            placeholder='Name'
                        />
                        {touched.name && errors.name && <p className={mystyles.error}>{errors.name}</p>}
                    </div>
                    <div className='field'>
                        <Field
                            className={mystyles.input}
                            type='text'
                            name='email'
                            placeholder='Email'
                        />
                        {touched.email && errors.email && <p className={mystyles.error}>{errors.email}</p>}
                    </div>
                    <div className='field'>
                        <Field
                            className={mystyles.input}
                            name='message'
                            component='textarea'
                            rows='6'
                        />
                        {touched.message && errors.message && <p className={mystyles.error}>{errors.message}</p>}
                    </div>
                    {/* <Field
                        component={Recaptcha}
                        sitekey={RECAPTCHA_KEY}
                        name="recaptcha"
                        onChange={value => setFieldValue('recaptcha', value)}
                    /> */}
                    <div className='buttons'>
                        <input name='submit' type='submit' disabled={isSubmitting} value='Send'
                        className={mystyles.button} />
                    </div>
                    {values.success && (
                        <p className={mystyles.success}>
                            Your message has been sent.
                        </p>
                    )}
                </form>
            )}
        />
  )
}

export default ContactForm