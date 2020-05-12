import React, { useEffect, useState } from 'react';
import './index.css';
const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [siteData, setSiteData] = useState([]);
  const [logo, setLogo] = useState([]);
  const getSiteData = () => {
    setTimeout(() => {
      const siteName = localStorage.getItem('site-data');
      setSiteData(JSON.parse(siteName)[0])
      setLogo(JSON.parse(siteName)[0].logo.url)
    }, 1000);
}
useEffect(() => {
  getSiteData()
},[])
  return ( 
    <>
    <div className='footer-root'>
        <div className='footer-col'>
        <img src={logo} alt=''/>
        </div>
        <div className='footer-col'>
          <div className='title'>Ettevõttest</div>
          <div>Meist</div>
          <div>Meist</div>
          <div>Meist</div>
        </div>
        <div className='footer-col'>
          <div className='title'>Jälgi meid</div>
          <div className='social-icons'>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className='cp'>©2020 Elustik OÜ. All rights reserved.</div>
      </>
   );
}
 
export default Footer;