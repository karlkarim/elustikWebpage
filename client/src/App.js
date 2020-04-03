import React from 'react';
import ThreeColRow from './sections/threeColRow/index';
import Header from './components/header';
import PrevWork from './sections/previousWork';
import ContactUs from './sections/contactUS';
import TeamMembers from './sections/teamMembers/index'



function App() {
  return (
    <div className='container'>
      <Header/>
      <ThreeColRow />
      <PrevWork />
      <ContactUs />
      <TeamMembers/>
    </div>
  )
}

export default App;
