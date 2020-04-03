import React from 'react'
import './index.css'



const Header = () => {



    return(
        <div className='header'>
        <a href='#default' class='logo'>Elustik</a>
        <div className='header-right'>
            <a className='active' href='#portfolio'>Tehtud tööd</a>
            <a href='#contact'>Kontakt</a>
            <a href="#team">Meeskond</a>
        </div>
        </div>
    )
}

export default Header;