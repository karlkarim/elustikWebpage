import axios from 'axios';
import { apiURL } from '../conf/apiConf';

export const sendEmail = (from, message) => {
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
axios(options);
}