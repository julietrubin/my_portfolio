import React from 'react'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'

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
            onSubmit={(values, { setSubmitting }) => {
                fetch("/?no-cache=1", {   
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: encode({
                        'form-name': 'contact',
                        ...values,
                    }),
                })
                .then(() => {
                    alert('Success!')
                    setSubmitting(false)
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
                handleReset,
            }) => (
                <form className='form'
                    name='contact'
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                    data-netlify='true'
                    data-netlify-honeypot='bot-field'
                >
                    <div className='field'>
                        <label htmlFor='name' className='label'>Name</label>
                        <Field
                            className='input'
                            type='text'
                            name='name'
                        />
                        {touched.name && errors.name && <p className='danger'>{errors.name}</p>}
                    </div>
                    <div className='field'>
                        <label htmlFor='email' className='label'>Email</label>
                        <Field
                            className='input'
                            type='text'
                            name='email'
                        />
                        {touched.email && errors.email && <p className='danger'>{errors.email}</p>}
                    </div>
                    <div className='field'>
                        <label htmlFor='message' className='label'>Message</label>
                        <Field
                            className='input-textarea'
                            name='message'
                            component='textarea'
                            rows='6'
                        />
                        {touched.message && errors.message && <p className='danger'>{errors.message}</p>}
                    </div>
                    <div className='buttons'>
                        <input type='reset' value='Clear'
                        className='button' />
                        <input name='submit' type='submit' disabled={isSubmitting} value='Send Message'
                        className='button' />
                    </div>
                </form>
            )}
        />
  )
}

export default ContactForm