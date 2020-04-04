import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { settings } from '../../conf/siteSettings';
import { apiURL } from '../../conf/apiConf';
import axios from 'axios';

const Articles = ({match, location}) => {
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    const response = await axios.get(`${apiURL}/posts`)
    setArticles(response.data)
  }
  useEffect(() => {
    getArticles();
  }, [])

  return ( 
    <>
    <Helmet>
  <title>{settings.siteName}</title>
    </Helmet>
    {articles.map(article => (
      <div>
        <h1><Link to={`/articles/${article.title}`}>{article.title}</Link></h1>
        <img src={article.main.url} alt={article.title} />
        <p>{article.post}</p>
      </div>
    ))}
    </>
   );
}
 
export default Articles;