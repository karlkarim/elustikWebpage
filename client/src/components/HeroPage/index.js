import React from 'react';
import './index.css'
import HeroLogo2 from '../../assets/img/HeroLogo2.png'

const HeroPage = () => {

    return(
        <div className='hero-page'>
            <img src={HeroLogo2} />
            <div className='hero-title'>Elustik OÜ<p>Pakume nahkhiirte seiret ja loendust</p></div>
            {/* <div className='title'>Pakume nahkhiirte seiret ja loendust</div> */}
            <p></p>
        </div>
    )
} 

export default HeroPage;