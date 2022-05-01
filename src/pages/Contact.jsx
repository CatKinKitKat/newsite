import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Header, Divider } from 'semantic-ui-react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const history = useNavigate()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })

      alert('Email sent!')
      history('/')
  }

  return (
    <Container>
      <Header size="huge">
        Contact
      </Header>
      <Divider />
      <form ref={form} onSubmit={sendEmail} className="ui form">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="ui form button" />
      </form>
    </Container>
  )
}

export default Contact
