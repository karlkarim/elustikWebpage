import React, { useState } from 'react';
import TextField from '../../components/TextField/index';
import InputField from '../../components/EmailInput';
import ButtonB from '../../components/Button';
import { sendEmail } from '../../utils/emailProvider';
import './index.css';

const ContactUs = () => {
  const [emailMessage, setEmailMessage] = useState('');
  const [emailFrom, setEmailFrom] = useState('');
  const handleEmail = (e) => {
    e.preventDefault();
    setEmailFrom(e.target.value);
  }
  const handleEmailMsg = (e) => {
    e.preventDefault();
    setEmailMessage(e.target.value);
  }
  return ( 
    <section>
      <div className='title'>Võta ühendust</div>
      <div className='content'>
        <div className='contactUs-form'>
      <form>
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
      <ButtonB
        onClick={() => sendEmail(emailFrom, emailMessage)}
        label='Saada'/>
        </div>
      </div>
    </section>
   );
}
 
export default ContactUs;