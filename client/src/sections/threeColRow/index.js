import React from 'react';
import ArticleCard from '../../components/ArticleCard/index';
import './index.css';

const ThreeColRow = () => {
  return ( 
    
    <div className='row'>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    
    </div>
   );
}
 
export default ThreeColRow;