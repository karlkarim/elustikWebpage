import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ArticleCard = ({img, title, link}) => {
  return (
  <div className='article-card-root'>
  <div className='article-card-img'>
    <img src='https://picsum.photos/300/170' alt=''/>
  </div>
  <div className='article-card-title title'>
  <Link to={'Kuidas nahkhiired tundi hilinesid.'}>Kuidas nahkhiired tundi hilinesid.</Link>
  </div>
  </div> );
}
 
export default ArticleCard;