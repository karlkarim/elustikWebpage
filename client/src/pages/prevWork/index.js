import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { settings } from '../../conf/siteSettings';
import { apiURL } from '../../conf/apiConf';
import axios from 'axios';

const PrevWork = ({match}) => {

  const [work, setWork] = useState([])
  let slug = match.params.slug;
  let workId = match.params.id;
  const getWork = async () => {
    const response = await axios.get(`${apiURL}/works/${workId}`)
    setWork([response.data]);
  } 
  useEffect(() => {
    getWork()
  }, [slug])
  console.log(work)

  return ( 
    <>
    <Helmet>
  <title>{settings.siteName} | {slug}</title>
    </Helmet>
    <section>
      <div className='content'>
    {work.map(w => (
        <div className='article-root'>
        <img src={w.main.url} alt={w.title} />
        <div className='title'>{w.title}</div>
        <div className='article-text'>{w.content}</div>
        </div>
    ))}
    </div>
    </section>
    </>
   );
}
 
export default PrevWork;