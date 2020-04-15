import React, {useState,useEffect} from 'react';
import ProfileCard from '../../components/profileCard/index';
import axios from 'axios';
import { apiURL } from '../../conf/apiConf';
import './index.css'

const TeamMembers = () => {
    const [members,setMembers] = useState([])
    const getMembers = async () => {
        try {
            const response = await axios.get(`${apiURL}/members`)
            setMembers(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        getMembers()
    },[])

    return(
        <section>
            <div className='title homepage-titles'>Meeskond</div>
                <div className='content'>
                        {members.map(member => (
                        <div key={member.id}className='team-column'>
                            <ProfileCard
                                name={member.name}
                                desc={member.description}
                                img={member.avatar.url}
                                email={member.email}
                                tel={member.phone}
                            />
                        </div>
                        ))
                        }
                    </div>
        </section>
    )
}

export default TeamMembers