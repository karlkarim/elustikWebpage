import React from 'react';
import ThreeColRow from './sections/threeColRow/index';
import Header from './components/header';
import PrevWork from './sections/previousWork';
import ContactUs from './sections/contactUS';
import TeamMembers from './sections/teamMembers/index'
import Footer from './components/Footer/index';



function App() {
  return (
    <>
      <Header/>
    <div className='container'>
      <ThreeColRow />
      <PrevWork />
      <ContactUs />
      <TeamMembers/>
    </div>
      <Footer />
    </>
  )
}

export default App;
