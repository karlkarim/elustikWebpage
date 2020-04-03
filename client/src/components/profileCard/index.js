import React from 'react';
import './index.css'
import raunoVunts from '../../assets/img/rauno_vuntsiga.jpg'

const ProfileCard = ({name,email,tel, desc,img}) => {

    return(
        
        <div className="profile-card">
            <img className='profile-img' src={img} alt="Rauno"/>
            <div class="profile-container">
                <h2>{name}</h2>
                <h3>{desc}</h3>
                <p>E-mail: {email}</p>
                <p>Telefon: {tel}</p>
            </div>    
       </div>
      
    )
}
export default ProfileCard;