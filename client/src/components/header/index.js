import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { apiURL } from '../../conf/apiConf';
import './index.css';

const Header = () => {
    let history = useHistory();
    const [title, setTitle] = useState();
    const [links, setLinks] = useState([])
    const getTitle = () => {
        setTimeout(() => {
            const siteData = localStorage.getItem('site-data');
            const logoUrl = JSON.parse(siteData)[0].logo.url
            setTitle(logoUrl)
          }, 1000);
            
    }
    const handleClick = () => {
        history.push("/");
    }
    const getNavLinks = async () => {
        try {
          const response = await axios.get(`${apiURL}/navigations?_sort=position`);
          setLinks(response.data);
        } catch (error) {
          console.error(error);
        }
      }

useEffect(() => {
    getNavLinks();
    getTitle();
},[])

    return(
        <div className='header'>
        <div onClick={() => handleClick()} className='header-left'>
            {title ? 
            <img
                src={title}
                className='logologo'
                alt='Elustik logo'
            /> : 'Loading'
        }
        </div>
        <div className='header-right'>
            {links.map(link => (
                <Link key={link.id} to={`/${link.url}`}>{link.Label}</Link>
            ))}
        </div>
        </div>
    )
}

export default Header;