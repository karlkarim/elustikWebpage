import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { settings } from '../../conf/siteSettings';
import { apiURL } from '../../conf/apiConf';
import axios from 'axios';

const Researches = () => {
  const [researches, setResearches] = useState([]);
  const getReasearches = async () => {
    const response = await axios.get(`${apiURL}/uuringuds`)
    setResearches(response.data)
  }
  useEffect(() => {
    getReasearches();
  }, [])
  return ( 
    <>
    <Helmet>
  <title>{settings.siteName}</title>
    </Helmet>
    {researches.map(research => (
      research.title
    ))}
    </>
   );
}
 
export default Researches;