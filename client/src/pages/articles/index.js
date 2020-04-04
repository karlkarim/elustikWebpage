import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { settings } from '../../conf/siteSettings';
import { apiURL } from '../../conf/apiConf';
import axios from 'axios';
import ArticleCard from '../../components/ArticleCard/index';

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
    <section>
      <div className='title'>Artikklid</div>
      <div className='content'>
    {articles.map(article => (
      <ArticleCard
        title={article.title}
        img={article.main.url}
        link={`/articles/${article.id}/${article.slug}`}
      />
        ))}
        </div>
    </section>
    </>
   );
}
 
export default Articles;