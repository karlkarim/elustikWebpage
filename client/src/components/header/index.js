import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import { Link } from 'react-router-dom';
import { apiURL } from '../../conf/apiConf';


const Header = () => {
    const [links, setLinks] = useState([])
    const getNavLinks = async () => {
        try {
          const response = await axios.get(`${apiURL}/navigations`);
          setLinks(response.data);
        } catch (error) {
          console.error(error);
        }
      }

useEffect(() => {
    getNavLinks()
},[])
console.log(links)
    return(
        <div className='header'>
        <a href='#default' className='logo'>Elustik</a>
        <div className='header-right'>
            {links.map(link => (
                <Link key={link.id} to={link.url}>{link.Label}</Link>
            ))}
        </div>
        </div>
    )
}

export default Header;