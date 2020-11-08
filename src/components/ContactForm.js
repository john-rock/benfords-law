import React, { useState } from "react"
import NetlifyForm from 'react-ssg-netlify-forms'
import { useSnackbar } from 'react-simple-snackbar'

const ContactForm = () => {
    const options = {
        position: 'center',
        style: {
          backgroundColor: '#262932',
          border: '2px solid lightgreen',
          color: 'lightgreen',
          fontSize: '20px',
          textAlign: 'center'
        },
        closeStyle: {
          color: '#fff',
          fontSize: '16px',
        },
      }
  const [openSnackbar] = useSnackbar(options)

  // Post-Submit Navigate
  const postSubmit = () => {
    console.log('Submitted')
    openSnackbar('Your message has been successfully submitted.')
  }

  // Simple controlled form setup (Control your own state)
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const [formValues, setFormValues] = useState({
    name: '',
    message: ''
  })

  return (
      <NetlifyForm formName="BL Contact Form" formValues={formValues} postSubmit={postSubmit}>
        <div className="contact-form-field">
          Your Name: <input type="text" name="name" value={formValues.name} onChange={handleChange} required />
        </div>
        <div className="contact-form-field">
          Message: <textarea name="message" value={formValues.message} onChange={handleChange} required />
        </div>
        <div className="contact-form-field">
          <button type="submit">Send</button>
        </div>
      </NetlifyForm>
  )
}

export default ContactForm;