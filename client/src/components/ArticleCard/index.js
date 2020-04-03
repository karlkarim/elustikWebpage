import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ArticleCard = ({img, title, link}) => {
  return (
  <div className='article-card-root'>
  <div className='article-card-img'>
    <img src={`${!img ? 'https://picsum.photos/300/170' : img}`} alt={img}/>
  </div>
  <div className='article-card-title title'>
  <Link to={link}>{title}</Link>
  </div>
  </div>
  );
}
 
export default ArticleCard;