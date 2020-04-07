import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { settings } from '../../conf/siteSettings';
import { apiURL } from '../../conf/apiConf';
import axios from 'axios';
import ArticleCard from '../../components/ArticleCard';


const PrevWorks = () => {
  

  const [works, setWorks] = useState([]);
  const getWorks = async () => {
    const response = await axios.get(`${apiURL}/works`)
    setWorks(response.data)
  }

  



  useEffect(() => {
    getWorks();
  }, [])
  console.log(works)
  return ( 
    <>
    <Helmet>
  <title>{settings.siteName}</title>
    </Helmet>
    <section>
    <div className='title'>Tehtud tööd</div>
    <div className='content'>
    {works.map(work => (
        <ArticleCard
          key={work.id}
          title={work.Title}
          link={`/works/${work.id}/${work.Slug}`}
          img={work.main.url}
        />
        ))}
    </div>
    </section>
    </>
   );
}
 
export default PrevWorks;