import axios from 'axios';
import { apiURL } from '../conf/apiConf';

export const sendEmail = async (from, message) => {
  try {
    const emailData = {
      to: 'elustik@yopmail.com',
      from: from,
      replyTo: 'no-reply@strapi.io',
      subject: 'Sõnum elustik veebilehelt',
      text: message,
      html: message,
    };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: emailData,
      url: `${apiURL}/email`,
    };
  return await axios(options);
  
  } catch (error) {
    console.log(error)
    return false;
  }
  
}