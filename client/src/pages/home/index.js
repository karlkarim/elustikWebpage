import React from 'react';
import ThreeColRow from '../../sections/threeColRow';
import PrevWork from '../../sections/previousWork';
import ContactUs from '../../sections/contactUS';
import TeamMembers from '../../sections/teamMembers/index';
import HeroPage from '../../sections/heroPage/index';

const Home = () => {
  return ( 
    <div className='container'>
      <HeroPage/>
      <ThreeColRow />
      <PrevWork />
      <ContactUs />
      <TeamMembers/>
    </div>
   );
}
 
export default Home;