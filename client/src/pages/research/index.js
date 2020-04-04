import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { settings } from '../../conf/siteSettings';
import { apiURL } from '../../conf/apiConf';
import axios from 'axios';

const Research = ({match}) => {
  const [research, setResearch] = useState([])
  let slug = match.params.slug;
  let reseachId = match.params.id;
  const getResearch = async () => {
    const response = await axios.get(`${apiURL}/uuringuds/${reseachId}`)
    setResearch([response.data]);
  } 
  useEffect(() => {
    getResearch()
  }, [slug])
  console.log(research)
  return ( 
    <>
    <Helmet>
  <title>{settings.siteName} | {slug}</title>
    </Helmet>
    <section>
      <div className='content'>
    {research.map(r => (
        <div className='article-root'>
        <img src={r.main.url} alt={r.title} />
        <h1>{r.title}</h1>
        <div className='article-text'>{r.content}</div>
        </div>
    ))}
    </div>
    </section>
    </>
   );
}
 
export default Research;