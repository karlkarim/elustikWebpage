import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { settings } from '../../conf/siteSettings';
import { apiURL } from '../../conf/apiConf';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'







const PrevWork = ({match}) => {

  const input = '# This is a header\n\nAnd this is a paragraph'
  
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
        <div className='article-title'>{w.Title}</div>
        <ReactMarkdown source={w.content} escapeHtml={false} className='article-text' />
        {/* <div className='article-text'>{w.content}</div> */}
        </div>
    ))}
    </div>
    </section>
    </>
   );
}
 
export default PrevWork;