import React from 'react';
import TextField from '../../components/TextField/index';
import EmailInput from '../../components/EmailInput';
import ButtonB from '../../components/Button'
import './index.css'

const ContactUs = () => {
  return ( 
    <section>
      <div className='title'>Võta ühendust</div>
      <div className='content'>
      <form className='contactUs-form'>
      <EmailInput />
      <TextField />
      <ButtonB label='Saada'/>
      </form>
      </div>
    </section>
   );
}
 
export default ContactUs;