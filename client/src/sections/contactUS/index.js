import React from 'react';
import TextField from '../../components/TextField/index';
import EmailInput from '../../components/EmailInput';
import ButtonB from '../../components/Button'

const ContactUs = () => {
  return ( 
    <section>
      <div className='title'>Võta ühendust</div>
      <div className='content'>
      <EmailInput />
      <ButtonB label='Saada'/>
      <TextField />
      </div>
    </section>
   );
}
 
export default ContactUs;