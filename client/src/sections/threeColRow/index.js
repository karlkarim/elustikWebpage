import React, { useEffect, useState } from 'react';
import ArticleCard from '../../components/ArticleCard/index';
import { apiURL } from '../../conf/apiConf';
import axios from 'axios';
import './index.css';

const ThreeColRow = () => {
  const [uuringud, setUuringud] = useState([]);

  const getUuringud = async () => {
    try {
      const uuringud = await axios.get(`${apiURL}/uuringuds`);
      setUuringud(uuringud.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUuringud();
  }, [])

  return ( 
    
    <section>
      <div className='title homepage-titles'>Nahkhiirte uuringud</div>
      <div className='content'>
      {uuringud.map(uuring => (
        <ArticleCard
        key={uuring.id}
        title={uuring.title}
        link={`/researches/${uuring.id}/${uuring.slug}`}
        img={uuring.main.url}
      />
      ))}
      </div>
    </section>
   );
}
 
export default ThreeColRow;