import React, { useState, useEffect } from 'react';
import ArticleCard from '../../components/ArticleCard';
import axios from 'axios';
import { apiURL } from '../../conf/apiConf';
import { useHistory } from "react-router-dom";


const PrevWork = () => {
  let history = useHistory();


  const [prevWork, setPrevWork] = useState([]);
  const getPrevWork = async () => {
    try {
      const response = await axios.get(`${apiURL}/works`)
      setPrevWork(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    history.push("/works");
    console.log('clicked');
}
 
  useEffect(() => {
    getPrevWork();
  },[])
console.log(prevWork)
  return ( 
    <section>
      <div onClick={() => handleClick()} style={{cursor: "pointer"}} className='title homepage-titles'>Tehtud tööd</div>
      
      <div className='content'>
        {prevWork.map(work => (
        <ArticleCard
          key={work.id}
          title={work.Title}
          link={`/works/${work.id}/${work.Slug}`}
          img={work.main.url}
        />
        ))}
      </div>
    </section>
   );
}
 
export default PrevWork;