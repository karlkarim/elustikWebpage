import React from 'react';
import ArticleCard from '../../components/ArticleCard/index';
import './index.css';

const ThreeColRow = () => {
  return ( 
    
    <section className='container'>
      <ArticleCard
        title={'Kuidas nahkhiired tundi hilinesid.'}
        link={'link-to-page'}
        img={'image-link-here'}
      />
      <ArticleCard />
      <ArticleCard />
    </section>
   );
}
 
export default ThreeColRow;