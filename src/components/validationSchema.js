import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('name is required'),
  email: Yup.string()
    .email('enter a valid email')
    .required('email is required'),
  message: Yup.string()
    .required('message is required'),
  recaptcha: Yup.string()
    .required('recaptcha must be clicked'),

})

export default validationSchema