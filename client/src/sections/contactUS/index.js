import React, { useState, useEffect } from 'react';
import TextField from '../../components/TextField/index';
import InputField from '../../components/EmailInput';
import ButtonB from '../../components/Button';
import { sendEmail } from '../../utils/emailProvider';
import './index.css';

const ContactUs = () => {
  const [emailMessage, setEmailMessage] = useState('');
  const [emailFrom, setEmailFrom] = useState('');
  const [emailFeedback, setFeedback] = useState({status: false, msg: ''});

  const handleEmail = (e) => {
    e.preventDefault();
    setEmailFrom(e.target.value);
  }
  const handleEmailMsg = (e) => {
    e.preventDefault();
    setEmailMessage(e.target.value);
  }
  const submitForm = (from, message) => {
    sendEmail(from, message)
    setEmailFrom('');
    setEmailMessage('');
    document.querySelector('textarea').value = '';
    setFeedback({
      status:true,
      msg: 'Sõnum saadetud!'
    })
    setTimeout(() => {
      setFeedback({
        status:false,
        msg: ''
      })
    }, 3000);
  }
  return ( 
    <section>
      
      <div className={`toast-message ${emailFeedback.status ? '': 'is-closed'}`}>{emailFeedback.msg}</div>
      <div className='title homepage-titles'>Võta ühendust</div>
      <div className='content'>
        <div className='contactUs-form'></div>
      <form onSubmit={(e) => e.preventDefault()}>
      <InputField
        inputType='email'
        inputValue={emailFrom}
        inputPlaceH='E-mail'
        onchange={handleEmail}
      />
      <TextField
        children={emailMessage}
        textPlaceholder='Sõnum siia...'
        onchange={handleEmailMsg}
      />
      </form>
        </div>
      <ButtonB
        disabled={!emailFrom || !emailMessage ? 'diabled': ''}
        onClick={() => submitForm(emailFrom, emailMessage)}
        label='Saada'/>
    </section>
   );
}
 
export default ContactUs;