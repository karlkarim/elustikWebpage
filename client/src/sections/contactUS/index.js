import React from 'react';
import TextField from '../../components/TextField/index';
import EmailInput from '../../components/EmailInput';
import ButtonB from '../../components/Button'
import './index.css';

const ContactUs = () => {
  return ( 
    <section>
      <div className='title'>Võta ühendust</div>
      <div className='content'>
        <div className='contactUs-form'>
      <form>
      <EmailInput />
      <TextField />
      </form>
      <ButtonB label='Saada'/>
        </div>
      </div>
    </section>
   );
}
 
export default ContactUs;