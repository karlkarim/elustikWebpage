import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { apiURL } from '../../conf/apiConf';
import elustikLogo from '../../elustik_logo.png'
import './index.css';

const Header = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/");
    }
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

    return(
        <div className='header'>
        <div className='header-left'> Elustik    
        <img
            onClick={() => handleClick()}
            src={elustikLogo}
            className='logologo'
            alt='Elustik logo'
        />
        </div>
        <div className='header-right'>
            {links.map(link => (
                <Link key={link.id} to={link.url}>{link.Label}</Link>
            ))}
        </div>
        </div>
    )
}

export default Header;