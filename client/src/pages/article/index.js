import React from 'react';
import { Helmet } from 'react-helmet';
import { settings } from '../../conf/siteSettings';

const Article = ({match, location}) => {
  return ( 
    <>
    <Helmet>
  <title>{settings.siteName} | {match.params.slug}</title>
    </Helmet>
    stuff
    </>
   );
}
 
export default Article;