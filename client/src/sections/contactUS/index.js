import React from 'react';
import TextField from '../../components/TextField/index';
import EmailInput from '../../components/EmailInput';

const ContactUs = () => {
  return ( 
    <section>
      <div className='title'>Võta ühendust</div>
      <div className='content'>
      <EmailInput />
      <TextField />
      </div>
    </section>
   );
}
 
export default ContactUs;