import React, { useState, useEffect } from 'react';
import ArticleCard from '../../components/ArticleCard';
import axios from 'axios';
import { apiURL } from '../../conf/apiConf';

const PrevWork = () => {
  const [prevWork, setPrevWork] = useState([]);
  const getPrevWork = async () => {
    try {
      const response = await axios.get(`${apiURL}/works`)
      setPrevWork(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPrevWork();
  },[])

  return ( 
    <section>
      <div className='title'>Tehtud tööd</div>
      <div className='content'>
        {prevWork.map(work => (
        <ArticleCard
          key={work.id}
          title={work.title}
          link={work.slug}
          img={work.main.url}
        />
        ))}
      </div>
    </section>
   );
}
 
export default PrevWork;