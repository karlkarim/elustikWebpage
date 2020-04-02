import React from 'react';
import ArticleCard from '../../components/ArticleCard/index';
import './index.css';

const ThreeColRow = () => {
  return ( 
    
    <section>
      <div className='title'>Nahkhiirte uuringud</div>
      <div className='content'>
      <ArticleCard
        title={'Kuidas nahkhiired tundi hilinesid.'}
        link={'link-to-page'}
        img={'image-link-here'}
      />
      <ArticleCard
        title={'Kuidas nahkhiired tundi hilinesid.'}
        link={'link-to-page'}
        img={'image-link-here'}
      />
      <ArticleCard
        title={'Kuidas nahkhiired tundi hilinesid.'}
        link={'link-to-page'}
        img={'image-link-here'}
      />
      </div>
    </section>
   );
}
 
export default ThreeColRow;